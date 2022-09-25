import create from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '../responses/User'

export interface UserState {
    user: User | null
    setUser: (user: User) => void
    getUser: () => User | null
}

export const useUserStore = create<UserState>(
    // @ts-ignore
    persist(
        (set, get) => ({
            user: null,
            setUser: (user: User) => set({ user }),
            getUser: () => get().user,
        }),
        {
            name: 'user',
        }
    )
)
