import { defineStore } from 'pinia'
import { ref } from 'vue'
import type {User} from '../types/commons/Users'
export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref('')
  const user = ref({})
  const isAuthenticated = ref(false)

  const setUser = (userData: User) => {
    user.value = userData
    isAuthenticated.value = true

  }
  const setToken = (token: string) => {
    accessToken.value = token

  }
  const clear = () => {
    accessToken.value = ''
    user.value = {}
    isAuthenticated.value = false
  }
  
  return {
    accessToken,
    user,
    isAuthenticated,
    setToken,
    setUser,
    clear
  }
},
{
  persist: true
}
)
