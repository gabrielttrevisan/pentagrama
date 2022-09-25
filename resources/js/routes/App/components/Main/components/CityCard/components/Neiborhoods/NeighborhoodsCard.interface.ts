import { GridProps } from '@mui/material'
import { Neighborhood } from '../../../../../../../../responses/City'

export interface NeighborhoodsCardProps extends GridProps {
    neighborhoods: Neighborhood[]
    visible: boolean
}
