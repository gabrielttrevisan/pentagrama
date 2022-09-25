import React from 'react'
import { FunctionComponent } from 'react'
import { NeighborhoodCard } from '../Neighborhood/NeiborhoodCard.component'
import { NeighborhoodsCardProps } from './NeighborhoodsCard.interface'
import { Wrapper } from './NeighborhoodsCard.styles'

export const NeighborhoodsCard: FunctionComponent<NeighborhoodsCardProps> = ({
    neighborhoods,
    visible,
    ...props
}) => {
    return visible ? (
        <Wrapper>
            {neighborhoods.map((neighborhood) => (
                <NeighborhoodCard
                    neighborhood={neighborhood}
                    key={neighborhood.id}
                />
            ))}
        </Wrapper>
    ) : (
        <></>
    )
}
