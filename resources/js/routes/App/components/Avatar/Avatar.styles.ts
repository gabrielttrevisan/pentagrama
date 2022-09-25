import { Box } from '@mui/material'
import { styled } from '@mui/material'

export const Circle = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    color: '#00559b',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all .15s ease-in',
    transform: 'scale(1)',

    '&:hover': {
        transform: 'scale(1.01)',
    },
}))
