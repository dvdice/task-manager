import {jwtDecode} from 'jwt-decode'
import {useUserStore} from "@/stores/userList";

export function isAuthenticated(): boolean {
    const authStore = useUserStore()

    if (!authStore.token) return false

    try {
        const decoded = jwtDecode(authStore.token) as { exp: number }
        return decoded.exp > Date.now() / 1000
    } catch {
        authStore.clearAuth()
        return false
    }
}
