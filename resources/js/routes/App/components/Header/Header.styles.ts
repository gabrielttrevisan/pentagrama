import { Typography } from '@mui/material'
import { styled } from '@mui/material'

export const CustomTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: '1rem',
}))
