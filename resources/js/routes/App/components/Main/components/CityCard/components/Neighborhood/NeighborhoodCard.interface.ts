import { ChipProps } from '@mui/material'
import { Neighborhood } from '../../../../../../../../responses/City'

export interface NeighborhoodCardProps extends ChipProps {
    neighborhood: Neighborhood
}
