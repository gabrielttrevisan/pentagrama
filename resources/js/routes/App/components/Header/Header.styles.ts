import { Button } from '@mui/material'
import { styled } from '@mui/material'

export const WhiteButton = styled(Button)(({ theme }) => ({
    color: theme.palette.common.white,
    cursor: 'pointer',
}))
