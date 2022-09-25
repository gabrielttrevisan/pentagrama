import { HTMLProps } from 'react'

export interface HeaderProps extends HTMLProps<HTMLDivElement> {
    onLogout: () => void
    onAddCity: () => void
    onFilter: () => void
}
