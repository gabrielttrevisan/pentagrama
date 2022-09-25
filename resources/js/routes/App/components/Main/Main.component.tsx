import React, { FunctionComponent, useEffect, useState } from 'react'
import { CityCard } from './components/CityCard/CityCard.component'
import { MainProps } from './Main.interface'
import { Box } from '@mui/material'

export const Main: FunctionComponent<MainProps> = ({
    cities,
    loading,
    onAddNeighborhood,
    ...props
}) => {
    return (
        <main>
            {loading ? (
                <></>
            ) : (
                <Box pt="2rem">
                    {cities.map((city) => (
                        <CityCard
                            city={city}
                            key={city.id}
                            onAddNeighborhood={onAddNeighborhood}
                        />
                    ))}
                </Box>
            )}
        </main>
    )
}
