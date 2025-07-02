import type {LoginForm} from "@/types/LoginForm.ts";
import axios from "axios";

const API_URL: string = 'http://localhost:3001/users'

export const AuthService = {
    async login(email: string, password: string) {
        debugger
        const response = await axios.get(API_URL, {
            params: { email, password }
        });
        return await response.data;
    },

    async register(user: LoginForm) {
        const response = await axios.post(API_URL, user);
        return await response.data;
    }
}
