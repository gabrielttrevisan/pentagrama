import React, { FunctionComponent } from 'react'
import { CityCard } from './components/CityCard/CityCard.component'
import { MainProps } from './Main.interface'
import { Box } from '@mui/material'
import { WhitePagination } from './Main.styles'

export const Main: FunctionComponent<MainProps> = ({
    cities,
    loading,
    pagination,
    page,
    onAddNeighborhood,
    onChange,
    ...props
}) => {
    return (
        <main>
            {loading ? (
                <></>
            ) : (
                <Box
                    pt="2rem"
                    pb="2rem"
                    display="flex"
                    rowGap={2}
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    width="100%"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        width="100%"
                    >
                        {cities.map((city) => (
                            <CityCard
                                city={city}
                                key={city.id}
                                onAddNeighborhood={onAddNeighborhood}
                            />
                        ))}
                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width="100%"
                    >
                        <WhitePagination
                            count={pagination.pages}
                            page={page}
                            onChange={onChange}
                        />
                    </Box>
                </Box>
            )}
        </main>
    )
}
