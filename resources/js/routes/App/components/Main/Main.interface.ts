import { HTMLProps } from 'react'
import { City } from '../../../../responses/City'
import { CityCardProps } from './components/CityCard/CityCard.interface'

export interface MainProps extends HTMLProps<HTMLDivElement> {
    cities: City[]
    loading: boolean
    onAddNeighborhood: CityCardProps['onAddNeighborhood']
}
