import type { User } from '@/types/user';
export const useAuthStore = defineStore('auth', {

  state: () => ({ user: null as User | null }),

  actions: {
    async login(email: string, password: string) { /* API-запрос */ }
  }
})
