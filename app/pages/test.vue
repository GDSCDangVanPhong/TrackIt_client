<template>
  <UButton label="Click me" @click="handleClick" />
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/useAuthStore'
import type { operations } from '../types/api'
const auth = useAuthStore()
const config = useRuntimeConfig()
const baseUrl = config.public.backend.base_url
type SayHelloResponse =
  | operations['AuthController_sayHello']['responses']['200']['content']['application/json']
  | operations['AuthController_sayHello']['responses']['400']['content']['application/json']
async function handleClick() {
try{
  const response = await $fetch<SayHelloResponse>(`${baseUrl}/auth/hello`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.accessToken}`
      },
      onResponse({ response }) {
        console.log(response._data.error.message) 
      }
    })
}
catch{
  return
}

}
</script>
