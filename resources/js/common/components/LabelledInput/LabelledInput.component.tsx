import React from 'react'
import { FunctionComponent } from 'react'
import { LabelledInputProps } from './LabelledInput.interface'
import { CustomLabelledInput } from './LabelledInput.styles'
import Box from '@mui/material/Box'

export const LabelledInput: FunctionComponent<LabelledInputProps> = ({
    label,
    onValueChange,
    name,
    onChange,
    ...props
}: LabelledInputProps) => {
    const decoratedHandler = (event: any) => {
        onValueChange?.(event.target.value)
        onChange?.(event)
    }

    const actualLabel = label || name

    return (
        <Box width="100%">
            <CustomLabelledInput
                label={actualLabel}
                dir="ltr"
                sx={{
                    fontSize: '0.8rem',
                }}
                variant="standard"
                onChange={decoratedHandler}
                color="primary"
                {...props}
            />
        </Box>
    )
}
