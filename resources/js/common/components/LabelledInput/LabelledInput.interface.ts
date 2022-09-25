import React from 'react'

export type OnValueChangeHandler = (value: string) => void

export interface LabelledInputProps extends React.HTMLProps<HTMLInputElement> {
    label?: string
    onValueChange?: OnValueChangeHandler
}
