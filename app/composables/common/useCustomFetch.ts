/* eslint-disable */
import { defu } from 'defu'
import type { UseFetchOptions } from '#app'
import { useAuthStore } from '~/store/useAuthStore' 
import type { ApiResponse } from '~/types/commons/Response'

let refreshPromise: Promise<void> | null = null

export function useCustomFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  const config = useRuntimeConfig()
  const router = useRouter()
  const toast = useToast()
  const authStore = useAuthStore()

  const baseURL = config.public.backend.base_url

  const defaults: UseFetchOptions<T> = {
    baseURL,
    key: url,
    server: false,

    // Luôn đính kèm token mới nhất khi request được gửi đi
    onRequest({ options }) {
      const token = authStore.accessToken
      if (token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        } as HeadersInit
      }
    },

    // Xử lý 401 + refresh token chỉ 1 lần duy nhất
    async onResponseError({ request, response, options }) {
      // Chỉ xử lý 401 do token hết hạn
      if (response.status !== 401) {
        toast.add({
          title: 'Lỗi',
          description: response._data?.error?.message || 'Đã có lỗi xảy ra',
          color: 'error',
        })
        return
      }

      // Đang refresh rồi → chờ
      if (!refreshPromise) {
        refreshPromise = (async () => {
          const { data, error } = await useFetch<ApiResponse>(
            `${baseURL}/auth/refreshToken`,
            {
              method: 'POST',
              credentials: 'include',
              server: false,
            }
          )

          if (error.value || !data.value?.data) {
            // Refresh thất bại → logout
            authStore.clear()
            router.push('/login')
            throw new Error('Refresh token failed')
          }

          // Refresh thành công → cập nhật token mới
          authStore.setToken(data.value.data)
        })().finally(() => {
          refreshPromise = null
        })
      }

      try {
        // Chờ refresh hoàn tất
        await refreshPromise

        // Cập nhật header với token mới nhất
        options.headers = {
          ...(options.headers || {}),
          Authorization: `Bearer ${authStore.accessToken}`,
        } as HeadersInit

        // Retry request gốc với token mới (dùng $fetch nguyên bản để tránh tạo composable mới)
        return await $fetch(request as string, {
          ...options,
          baseURL,
          method: (options.method || 'GET') as any,
        })
      } catch {
        // Nếu refresh thất bại ở trên đã xử lý redirect rồi
        // Ở đây chỉ cần không throw nữa
      }
    },
  }

  const params = defu(options, defaults)

  return useFetch<T>(url, params)
}