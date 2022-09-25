import React from 'react'
import { FunctionComponent } from 'react'
import { getAbbreviation } from '../../../../../../utils/getAbbreviation'
import { AvatarProps } from './Avatar.interface'
import { Circle } from './Avatar.styles'
import { Tooltip } from '@mui/material'

export const Avatar: FunctionComponent<AvatarProps> = ({
    name,
    size,
    onClick,
}) => {
    const letters = getAbbreviation(name)

    return (
        <Tooltip title={name}>
            <Circle
                width={`${size}px`}
                height={`${size}px`}
                display="flex"
                alignItems="center"
                justifyContent="center"
                onClick={onClick}
            >
                {letters}
            </Circle>
        </Tooltip>
    )
}
