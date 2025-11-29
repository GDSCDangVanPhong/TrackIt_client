<template>
  <div class="w-screen h-screen flex justify-center items-center p-8">
    <div class="w-96 h-96 flex flex-col justify-center items-center border-primary rounded-lg ">
      <div class="text-center px-8">
        <h1 class="text-2xl font-bold text-primary mb-4">GitHub OAuth</h1>
        <p class="text-primary mb-20">
          You will be redirected to the application soon. Stay tuned!
        </p>
        <div class="flex justify-center">
          <CommonsLoadingAnimation />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useRuntimeConfig, useRoute, useRouter } from "#app";
import { useAuthStore } from "~/store/useAuthStore";
import type { ApiResponse } from "~/types/commons/Response";


const config = useRuntimeConfig()
const toast = useToast()
const router = useRouter();
const { setToken, setUser } = useAuthStore();
const route = useRoute();
const baseUrl = config.public.backend.base_url
const sendCodeToBackend = async (authCode: string) => {
  if (!authCode) {
    toast.add({
      title: "Authentication Error",
      description: "Authorization code not provided",
      color: "error",
    });

    return;
  }

  try {
    const payload = {
      code: authCode,

      redirect_uri: window.location.origin + route.fullPath.split("?")[0],
    };

    const response = await $fetch<ApiResponse>(`${baseUrl}/auth/github`, {
      method: "POST",
      body: payload,
    });

    const { data, success } = response;
    console.log(data);
    if (success) {
      setToken(data.accessToken);
      setUser(data.user);
      router.push("/");
    } else {
      toast.add({
        title: "Authentication Error",
        description: "Backend did not return a token!",
        color: "error",
      });
      router.push("/login");
    }
  } catch (err) {
    console.error(err);
    router.push("/login");
  }
};

// 6. Hook onMounted để bắt đầu xử lý khi component được tải
onMounted(() => {
  // Lấy giá trị 'code' từ query parameter của URL
  const authCode = route.query.code;

  if (authCode) {
    sendCodeToBackend(authCode.toString());
  } else if (route.query.error) {
    toast.add({
      title: "Authentication Error",
      description: 'Route Error',
      color: "error",
    });
    setTimeout(() => router.push("/login"), 3000);
  } else {
    router.push("/login");
  }
});

</script>