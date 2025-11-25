<template>
  <div class="callback-container">
    <p>Đang xử lý đăng nhập với Google...</p>
    <div v-if="error" class="error-message">
      Có lỗi xảy ra: {{ error }}
    </div>
  </div>
</template>

<script setup>
// 1. Nhập các hook cần thiết từ Nuxt và Vue
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useRuntimeConfig } from '#app';

// Định nghĩa các biến trạng thái
const router = useRouter();
const route = useRoute();
const config = useRuntimeConfig();
const error = ref(null);

// URL của endpoint backend để xử lý code
// Thay thế bằng endpoint thực tế của bạn
const backendAuthEndpoint = config.public.apiBaseUrl + '/auth/login/google';

/**
 * Hàm gửi Authorization Code đến Backend
 * @param {string} authCode - Mã ủy quyền nhận được từ Google
 */
const sendCodeToBackend = async (authCode) => {
  if (!authCode) {
    error.value = 'Không tìm thấy Authorization Code trong URL.';
    console.error('Lỗi: Thiếu code ủy quyền.');
    // Chuyển hướng về trang đăng nhập nếu thiếu code
    router.replace('/login'); 
    return;
  }
  
  try {
    // 2. Chuẩn bị dữ liệu gửi đi (POST request)
    const payload = {
      // Gửi code đến BE
      code: authCode, 
      // Gửi lại redirect_uri đã dùng, giúp BE xác minh yêu cầu
      redirectUri: window.location.origin + route.fullPath.split('?')[0]
    };

    console.log('Gửi code đến BE:', payload);

    // 3. Thực hiện yêu cầu POST đến Backend
    const response = await $fetch(backendAuthEndpoint, {
      method: 'POST',
      body: payload,
    });
    
    // Giả sử Backend trả về một token và thông tin user
    const { token, user } = response;

    if (token) {
      // 4. Lưu Token (ví dụ: vào Local Storage)
      localStorage.setItem('userToken', token);
      console.log('Đăng nhập thành công, Token đã được lưu.');
      
      // 5. Chuyển hướng người dùng đến trang chính
      router.replace('/'); 
    } else {
      error.value = 'Lỗi xác thực: Backend không trả về token.';
    }

  } catch (err) {
    console.error('Lỗi khi gửi code đến Backend:', err);
    error.value = err.data?.message || 'Không thể xác thực với Backend.';
    // Chuyển hướng người dùng về trang đăng nhập sau khi gặp lỗi
    // router.replace('/login'); 
  }
};

// 6. Hook onMounted để bắt đầu xử lý khi component được tải
onMounted(() => {
  // Lấy giá trị 'code' từ query parameter của URL
  const authCode = route.query.code;

  if (authCode) {
    sendCodeToBackend(authCode);
  } else if (route.query.error) {
    // Xử lý trường hợp Google trả về lỗi (ví dụ: người dùng từ chối)
    error.value = `Lỗi từ Google: ${route.query.error_description || route.query.error}`;
    console.error('Lỗi Google Auth:', route.query.error);
    // Có thể chuyển hướng về trang đăng nhập sau 3s
    setTimeout(() => router.replace('/login'), 3000); 
  } else {
    error.value = 'URL không hợp lệ. Không tìm thấy code hoặc lỗi.';
    router.replace('/login');
  }
});
</script>

<style scoped>
.callback-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
  font-family: sans-serif;
}
.error-message {
  color: #d32f2f;
  background-color: #ffebee;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  border: 1px solid #d32f2f;
}
</style>