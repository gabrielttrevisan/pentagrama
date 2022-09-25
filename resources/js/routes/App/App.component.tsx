import React, { useState, useEffect } from 'react'
import { FunctionComponent } from 'react'
import { UserService } from '../../services/UserService'
import { useAuthStore } from '../../store/useAuthStore'
import { useUserStore } from '../../store/useUserStore'
import { Header } from './components/Header/Header.component'
import { useNavigate } from 'react-router-dom'
import { Main } from './components/Main/Main.component'
import { Box } from '@mui/material'
import { City } from '../../responses/City'
import { CityService } from '../../services/CityService'
import { CityPagination } from '../../responses/Pagination'
import { AddCityDialog } from './components/AddCityDialog/AddCityDialog.component'

export const App: FunctionComponent<any> = () => {
    const { token, clearToken } = useAuthStore()
    const userService = new UserService(token!)
    const citiesService = new CityService(token!)
    const { setUser } = useUserStore()
    const [loading, setLoading] = useState(false)
    const [loadingCities, setLoadingCities] = useState(false)
    const [openAddCity, setOpenAddCity] = useState(false)
    const [name, setName] = useState('')
    const [consolidatedAt, setConsolidatedAt] = useState('')
    const [state, setState] = useState('')
    const [cities, setCities] = useState<City[]>([])
    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState<CityPagination>()
    const navigate = useNavigate()

    const loadCities = async () => {
        const response = await citiesService.getPage({
            page,
        })

        if (response.status === 200) {
            setCities(response.data.cities)
        }
    }

    const handleLogout = async () => {
        setLoading(true)

        await userService.signOut()

        clearToken()
        navigate('/', {
            replace: true,
        })
    }

    const handleAddCity = async () => {
        setOpenAddCity(false)
        setLoadingCities(true)

        const response = await citiesService.create({
            name,
            state,
            consolidated_at: new Date(consolidatedAt).toDateString(),
        })

        if (response.status === 204) {
            await loadCities()
        }

        setLoadingCities(false)
    }

    const handleAddNeighborhood = async (id: number, name: string) => {
        setLoadingCities(true)

        const response = await citiesService.createNeighborhood(id, name)

        if (response.status === 204) {
            await loadCities()
        }

        setLoadingCities(false)
    }

    useEffect(() => {
        ;(async () => {
            setLoading(true)

            const response = await userService.getUserInfo()

            setUser(response.data)
            setLoading(false)
        })()
        ;(async () => {
            setLoadingCities(true)
            await loadCities()
            setLoadingCities(false)
        })()
    }, [])

    return loading ? (
        <></>
    ) : (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                <Header
                    onLogout={handleLogout}
                    onAddCity={() => setOpenAddCity(true)}
                />

                <Main
                    cities={cities}
                    loading={loadingCities}
                    onAddNeighborhood={handleAddNeighborhood}
                />
            </Box>

            <AddCityDialog
                onCancel={() => setOpenAddCity(false)}
                onConfirm={handleAddCity}
                setConsolidatedAt={setConsolidatedAt}
                setState={setState}
                setName={setName}
                open={openAddCity}
            />
        </>
    )
}
