<template>
  <div class="w-screen h-screen flex justify-center items-center p-8">
    <div class="w-96 h-96 flex flex-col justify-center items-center border-primary rounded-lg ">
      <div class="text-center px-8">
        <h1 class="text-2xl font-bold text-primary mb-4">Google OAuth</h1>
        <p class="text-primary mb-20">
          You will be redirected to Google to authorize the application. Stay tuned!
        </p>
        <div class="flex justify-center">
          <CommonsLoadingAnimation />
        </div>
      </div>
    </div>
  </div>
</template>

 <script setup>
// 1. Nhập các hook cần thiết từ Nuxt và Vue
import { onMounted, ref } from 'vue';
import { useRuntimeConfig, useRoute, useRouter } from '#app';
import { useAuthStore } from '~/store/useAuthStore';

// Định nghĩa các biến trạng thái
const router = useRouter();
const route = useRoute();
const toast = useToast();
const config = useRuntimeConfig();
const baseUrl = config.public.backend.base_url;
const error = ref(null);
const { setToken, setUser } = useAuthStore();
// URL của endpoint backend để xử lý code
// Thay thế bằng endpoint thực tế của bạn
const backendAuthEndpoint = `${baseUrl}/auth/google`;

/**
 * Hàm gửi Authorization Code đến Backend
 * @param {string} authCode - Mã ủy quyền nhận được từ Google
 */
const sendCodeToBackend = async (authCode) => {
  if (!authCode) {
    toast.add({
      title: 'Authentication Error',
      description: 'Authorization code not provided',
      color: 'error'
    })
    
    return;
  }
  
  try {
    // 2. Chuẩn bị dữ liệu gửi đi (POST request)
    const payload = {
      // Gửi code đến BE
      code: authCode, 
      
      redirect_uri: window.location.origin + route.fullPath.split('?')[0]
    };

    // 3. Thực hiện yêu cầu POST đến Backend
    const response = await $fetch(backendAuthEndpoint, {
      method: 'POST',
      body: payload,
    });
    
    // Giả sử Backend trả về một token và thông tin user
    const { data, success} = response;
    console.log(data)
    if (success) {
      setToken(data.accessToken)
      setUser(data.user)
      router.push('/')
    } else {
      toast.add({
        title: 'Authentication Error',
        description: 'Backend did not return a token!',
        color: 'error'
      })
      router.push('/login')
    }

  } catch (err) {
    error.value = err.data?.message || 'Không thể xác thực với Backend.';
    toast.add({
      title: 'Authentication Error',
      description: error.value,
      color: 'error'
    })
    router.push('/login')
  }
};

// 6. Hook onMounted để bắt đầu xử lý khi component được tải
onMounted(() => {
  
  // Lấy giá trị 'code' từ query parameter của URL
  const authCode = route.query.code;

  if (authCode) {
    sendCodeToBackend(authCode);
  } else if (route.query.error) {
    toast.add({
      title: 'Authentication Error',
      description: error.value,
      color: 'error'
    })
    setTimeout(() => router.push('/login'), 3000); 
  } else {
    error.value = 'URL không hợp lệ. Không tìm thấy code hoặc lỗi.';
    toast.add({
      title: 'Authentication Error',
      description: error.value,
      color: 'error'
    })
    router.push('/login');
  }
});
</script> 