import { defineStore } from "pinia";
import { User } from "@/types/user";

export const useUserStore  = defineStore('userList', {
    state: ()=> ({
        users: [] as User[]
    }),
    actions: {
        add(user: User): void {
            this.users.push(user)
        },
        remove(userId: number) {
            this.users = this.users.filter(u => u.id !== userId)
        }
    },
    getters: {
        getUserById: (state) => (id: string) => {
            return state.users.find(user => user.id === id)
        }
    }
})
