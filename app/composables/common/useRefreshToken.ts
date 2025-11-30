import { useAuthStore } from "~/store/useAuthStore";
import type { ApiResponse } from "~/types/commons/Response";

// composables/useRefreshToken.ts
export const useRefreshToken = () => {
  const authStore = useAuthStore();
  const refreshPromise = ref<Promise<ApiResponse> | null>(null);

  const refreshAccessToken = async (): Promise<boolean> => {
    // Nếu đang có request refresh đang thực hiện, chờ kết quả
    if (refreshPromise.value) {
      try {
        const result = await refreshPromise.value;
        return result.success && !!result.data?.accessToken;
      } catch {
        return false;
      }
    }

    // Tạo promise mới cho việc refresh
    const promise = $fetch<ApiResponse>('/auth/refresh', {
      method: 'POST' as const,
      credentials: 'include',
    });

    refreshPromise.value = promise;

    try {
      const response = await promise;
      
      if (response.success && response.data?.accessToken) {
        authStore.setToken(response.data.accessToken);
        return true;
      }
      
      // Nếu refresh thất bại, clear auth state
      authStore.clear();
      return false;
    } finally {
      refreshPromise.value = null;
    }
  };

  return {
    refreshAccessToken,
  };
};