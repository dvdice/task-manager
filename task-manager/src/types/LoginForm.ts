import type { User } from '@/types/user.ts'
export interface LoginForm extends User {
    password: string
}
