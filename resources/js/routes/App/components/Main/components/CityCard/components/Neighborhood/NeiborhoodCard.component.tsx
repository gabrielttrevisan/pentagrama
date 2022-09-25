import React from 'react'
import { FunctionComponent } from 'react'
import { NeighborhoodCardProps } from './NeighborhoodCard.interface'
import { Wrapper } from './NeighborhoodCard.styles'

export const NeighborhoodCard: FunctionComponent<NeighborhoodCardProps> = ({
    neighborhood,
    ...props
}) => {
    return <Wrapper label={neighborhood.name} />
}
