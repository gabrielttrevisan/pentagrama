import React, { useState, useEffect } from 'react'
import { FunctionComponent } from 'react'
import { UserService } from '../../services/UserService'
import { useAuthStore } from '../../store/useAuthStore'
import { useUserStore } from '../../store/useUserStore'
import { Header } from './components/Header/Header.component'
import { useNavigate } from 'react-router-dom'

export const App: FunctionComponent<any> = () => {
    const { token, clearToken } = useAuthStore()
    const userService = new UserService(token!)
    const { getUser, setUser } = useUserStore()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleLogout = async () => {
        setLoading(true)

        await userService.signOut()

        clearToken()
        navigate('/', {
            replace: true,
        })
    }

    useEffect(() => {
        ;(async () => {
            setLoading(true)

            const response = await userService.getUserInfo()

            setUser(response.data)
            setLoading(false)
        })()
    }, [])

    return loading ? (
        <></>
    ) : (
        <>
            <Header onLogout={handleLogout} />
        </>
    )
}
