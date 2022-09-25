import { styled } from '@mui/material'
import Box from '@mui/material/Box'

export const Card = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    width: '250px',
    boxSizing: 'border-box',
    borderRadius: '0.5rem',
    padding: '2rem 1rem',
    boxShadow: '0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08)',

    [theme.breakpoints.down('xs')]: {
        width: '100%',
    },
}))
