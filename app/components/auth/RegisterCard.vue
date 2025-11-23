<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const toast = useToast()
const auth = useLocalAuth()
const fields: AuthFormField[] = [{
  name: 'email',
  type: 'text',
  label: 'Email',
  placeholder: 'Enter your email',
  required: true
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  required: true
}, {
  name: 'confirmPassword',
  label: 'Confirm Password',
  type: 'password',
  placeholder: 'Confirm your password',
  
}, {
  name: 'name',
  label: 'Name',
  type: 'text',
  placeholder: 'Enter your name',
  required: true
}]


const providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
  class: 'cursor-pointer',
  onClick: () => {
    toast.add({ title: 'Google', description: 'Login with Google' })
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
  password: z.string().min(8, 'Must be at least 8 characters'),
  confirmedPassword: z.string().min(8, 'Must be at least 8 characters'),
  name: z.string().min(2, 'Must be at least 2 characters'),
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4 h-screen" >
    <UPageCard class="w-full max-w-md ">
      <UAuthForm
        :schema="schema"
        title="Create a new account"
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
            By signing up, you agree to our <a href="#" >Terms of Service</a> and <a href="#">Privacy Policy</a>.
            </template>
        </UAuthForm>
    </UPageCard>
  </div>
</template>

