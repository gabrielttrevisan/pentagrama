import { HTMLProps } from 'react'
import { City } from '../../../../../../responses/City'
import { GridProps } from '@mui/material'

export interface CityCardProps extends GridProps {
    city: City
    onAddNeighborhood: (id: number, name: string)
}
