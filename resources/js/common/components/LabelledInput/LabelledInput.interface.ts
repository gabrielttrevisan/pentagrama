import React from 'react'
import TextFieldProps from '@mui/material/TextField'

export type OnValueChangeHandler = (value: string) => void

export interface LabelledInputProps
    extends TextFieldProps,
        React.HTMLProps<HTMLInputElement> {
    label?: string
    onValueChange?: OnValueChangeHandler
}
