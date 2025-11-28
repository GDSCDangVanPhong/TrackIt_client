<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'
import { useGoogleOAuth } from '~/composables/auth/useGoogleLogin'
import { useLocalAuth } from '~/composables/auth/useLocalAuth'
import { useAuthStore } from '~/store/useAuthStore'

const toast = useToast()
const { login } = useGoogleOAuth()
const { useSignIn } = useLocalAuth()
const router = useRouter()
const { setUser, setToken } = useAuthStore()
const fields: AuthFormField[] = [{
  name: 'email',
  type: 'email',
  label: 'Email',
  placeholder: 'Enter your email',
  required: true
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  required: true
}]

const providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
  class: 'cursor-pointer',
  onClick: () => {
    login()
  }
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  class: 'cursor-pointer',
  onClick: () => {
    toast.add({ title: 'GitHub', description: 'Login with GitHub' })
  }
}]

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  try {
    const response = await useSignIn(
      payload.data.email,
      payload.data.password
    );

    // response có dạng ApiResponse
    if (!response.success) {
      toast.add({
        title: 'Error',
        description: response.error?.message || 'Login failed',
        color: 'error'
      });
      return;
    }

    setUser(response.data.user)
    setToken(response.data.accessToken)
    router.push('/')

  } catch (e) {
    console.error(e)
    toast.add({
      title: 'Unexpected error',
      description: `'Something went wrong.'`,
      color: 'error'
    })
  }
}

</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4 h-screen" >
    <UPageCard class="w-full max-w-md ">
      <UAuthForm
        :schema="schema"
        title="Login"
        description="Enter your credentials to access your account."
        icon="i-lucide-user"
        :fields="fields"
        :providers="providers"
        :submit="{
          class: 'cursor-pointer'
        }"
        @submit="onSubmit"
        >
            <template #footer>
            Dont have an account ? <NuxtLink to="/auth/register" class= "hover:text-primary"> Register</NuxtLink>
            </template>
        </UAuthForm>
    </UPageCard>
  </div>
</template>

