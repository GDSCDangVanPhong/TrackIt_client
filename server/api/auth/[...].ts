import { NuxtAuthHandler } from '#auth'
import GoogleProvider from 'next-auth/providers/google'

const runtimeConfig = useRuntimeConfig()

// Extend JWT & Session để có type cho accessToken của bạn
declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string
    error?: string
  }
}

declare module 'next-auth' {
  interface Session {
    accessToken?: string
    error?: string
  }
}

export default NuxtAuthHandler({
  secret: runtimeConfig.authSecret, // BẮT BUỘC có

  providers: [
    // @ts-expect-error – tạm thời do type mismatch Auth.js v5
    GoogleProvider.default({
      clientId: runtimeConfig.google.clientId,
      clientSecret: runtimeConfig.google.clientSecret,
      authorization: {
        params: {
          scope: 'openid email profile',
          response_type: 'code',
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      // Lần đầu đăng nhập: account có dữ liệu
      if (account?.id_token) {
        try {
          const response = await $fetch(runtimeConfig.backend.graphqlUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              query: `
                mutation LoginGoogle($idToken: String!) {
                  loginGoogle(idToken: $idToken) {
                    accessToken
                    user {
                      id
                      email
                      name
                      role
                    }
                  }
                }
              `,
              variables: { idToken: account.id_token },
            }),
          })

          if (response.errors) {
            throw new Error(response.errors[0]?.message || 'Login failed')
          }

          const { accessToken, user } = response.data.loginGoogle

          return {
            ...token,
            accessToken,
            user, // nếu bạn muốn lưu luôn user vào token
          }
        } catch (error) {
          console.log(error)
          return { ...token, error: 'BackendLoginFailed' }
        }
      }

      // Các lần sau: chỉ trả về token hiện tại
      return token
    },

    async session({ session, token }) {
      if (token.accessToken) {
        session.accessToken = token.accessToken as string
      }
      if (token.error) {
        session.error = token.error
      }
      if (token.user) {
        session.user = { ...session.user, ...token.user }
      }
      return session
    },
  },

  pages: {
    signIn: '/login', // nếu muốn custom trang login
    error: '/login',  // hiển thị lỗi nếu backend từ chối
  },
})