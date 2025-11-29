export const useGoogleOAuth = () => {
  const config = useRuntimeConfig()

  const googleLogin = () => {
    const params = new URLSearchParams({
      client_id: config.public.google.clientId,
      redirect_uri: 'http://localhost:3000/auth/google/callback',
      response_type: 'code',
      scope: 'openid email profile',
      access_type: 'offline',
      state: Math.random().toString(36).substring(2),
      prompt: 'consent'
    })

    
    const state = params.get('state')!
    useCookie('oauth_state', { maxAge: 600 }).value = state

    const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
    window.location.href = googleUrl
  }

  return { googleLogin }
}