export const useGitHubLogin = () => {
  const config = useRuntimeConfig()
  const params = new URLSearchParams({ 
    client_id: config.public.github.clientId,
    redirect_uri: 'http://localhost:3000/auth/github/callback',
    scope: 'read:user user:email',
    allow_signup: 'true',
    state: crypto.randomUUID()
  })  
  const githubAuthUrl = `https://github.com/login/oauth/authorize?${params.toString()}`
  const githubLogin = () => {
    window.location.href = githubAuthUrl
  }

  return { githubLogin }
}