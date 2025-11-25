// server/api/auth/google.post.ts
export default defineEventHandler(async (event) => {
  const { idToken } = await readBody(event)

  const res = await $fetch('https://your-backend.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {
      query: `mutation($idToken:String!){loginGoogle(idToken:$idToken){accessToken}}`,
      variables: { idToken }
    }
  })

  if (res.errors) {
    throw createError({ statusCode: 401, message: res.errors[0].message })
  }

  const { accessToken } = res.data.loginGoogle

  await setUserSession(event, {
    accessToken,
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000) // 90 ngày
  })

  return { success: true }
})