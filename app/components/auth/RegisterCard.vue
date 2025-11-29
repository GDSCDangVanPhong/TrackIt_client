<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent, AuthFormField } from "@nuxt/ui";
import { useToast } from "#imports";
import { useGoogleOAuth } from "~/composables/auth/useGoogleLogin";
import { useLocalAuth } from "~/composables/auth/useLocalAuth";
import { useAuthStore } from "~/store/useAuthStore";

const { login } = useGoogleOAuth();
const { useSignUp } = useLocalAuth();
const toast = useToast();
const router = useRouter();
const isLoading = ref(false);
const { setUser, setToken } = useAuthStore();
const fields: AuthFormField[] = [
  {
    name: "email",
    type: "text",
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
  },
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    required: true,
  },
];

const providers = [
  {
    label: "Google",
    icon: "i-simple-icons-google",
    class: "cursor-pointer",
    onClick: () => {
      login();
    },
  },
  {
    label: "GitHub",
    icon: "i-simple-icons-github",
    class: "cursor-pointer",
    onClick: () => {
      toast.add({ title: "GitHub", description: "Login with GitHub" });
    },
  },
];

const schema = z
  .object({
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Must be at least 8 characters"),
    confirmPassword: z.string(), // ← phải đúng với tên field
    name: z.string().min(2, "Must be at least 2 characters"),
  })
  // Và thêm refine để kiểm tra password trùng nhau
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type Schema = z.output<typeof schema>;
async function onSubmit(event: FormSubmitEvent<Schema>) {
  try{
    isLoading.value = true;
    const response = await useSignUp(
      event.data.email,
      event.data.password,
      event.data.confirmPassword,
      event.data.name,
    );
    setUser(response.data.user);
    setToken(response.data.accessToken);
    router.push("/");
  } catch {
    return;
  }
  finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4 h-screen">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        title="Create a new account"
        description="Enter your credentials to access your account."
        icon="i-lucide-user"
        :fields="fields"
        :providers="providers"
        :submit="{
          class: 'cursor-pointer',
        }"
        @submit="onSubmit"
      >
        <template #footer>
          <div>
            <p>
              By signing up, you agree to our
              <NuxtLink to="/terms-of-service" class="hover:text-primary"
                >Terms of Service</NuxtLink
              >
              and
              <NuxtLink to="/privacy-policy" class="hover:text-primary"
                >Privacy Policy</NuxtLink
              >.
            </p>
          </div>
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
