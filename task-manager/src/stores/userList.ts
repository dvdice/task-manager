import { defineStore } from "pinia";
import { User } from "@/types/user";

export const useUserStore  = defineStore('userList', {
    state: ()=> ({
        users: [] as User[],
        token: localStorage.getItem('token') as string | null
    }),
    actions: {
        add(user: User): void {
            this.users.push(user)
        },
        remove(userId: number) {
            this.users = this.users.filter(u => u.id !== userId)
        },
        setToken(newToken: string) {
            token.value = newToken
            localStorage.setItem('token', newToken)
        },
        clearAuth(userId?: number) {
            token.value = null;
            localStorage.removeItem('token')
            if (userId) this.remove(userId);
        }

    },
    getters: {
        isAuthenticated: (state) => !!state.token,
        getUserById: (state) => (id: string) => {
            return state.users.find(user => user.id === id)
        }
    }
})
