import { HTMLProps } from 'react'
import { City } from '../../../../responses/City'
import { CityPagination } from '../../../../responses/Pagination'
import { CityCardProps } from './components/CityCard/CityCard.interface'
import { PaginationProps } from '@mui/material/Pagination'

export interface MainProps extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
    cities: City[]
    loading: boolean
    onAddNeighborhood: CityCardProps['onAddNeighborhood']
    pagination: CityPagination
    onChange: PaginationProps['onChange']
    page: number
}
