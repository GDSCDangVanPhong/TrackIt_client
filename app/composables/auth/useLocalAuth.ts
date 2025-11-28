import type { ApiResponse } from "~/types/commons/Response";

export const useLocalAuth = () => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.backend.base_url;

  const backendAuthEndpoint = `${baseUrl}/auth`;
  
  const useSignIn = async(email: string, password: string) : Promise<ApiResponse> => {
    const response = await $fetch<ApiResponse>(`${backendAuthEndpoint}/signin`, {
      method: 'POST',
      body: { email, password }
    });
    return response;
  }
  
  const useSignUp = async(email: string, password: string, confirmPassword: string, name: string): Promise<ApiResponse> => {
    const response = await $fetch<ApiResponse>(`${backendAuthEndpoint}/register`, {
      method: 'POST',
      body: { email, password, confirmPassword, name }
    });
    return response;
  }
  
  return {
    useSignIn,
    useSignUp
  }
}
