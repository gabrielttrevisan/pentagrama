import create from 'zustand'
import { persist } from 'zustand/middleware'

export interface AuthState {
    token: string | null
    setToken: (token: string) => void
    getToken: () => string | null
    clearToken: () => void
}

export const useAuthStore = create<AuthState>(
    // @ts-ignore
    persist(
        (set, get) => ({
            token: null,
            setToken: (token: string) => set({ token }),
            getToken: () => get().token,
            clearToken: () => set({ token: null }),
        }),
        {
            name: 'auth',
        }
    )
)
