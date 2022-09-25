import { Grid, alpha, Typography } from '@mui/material'
import { styled } from '@mui/material'

export const Wrapper = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    padding: '1rem',
    boxShadow: `0 5px 30px ${alpha(theme.palette.common.black, 0.15)}`,
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all .15s ease-in',
    transform: 'scale(1)',

    '&:hover': {
        transform: 'scale(1.05)',
    },

    '& > *': {
        width: '25%',
    },
}))

export const NameLabel = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.black,
    padding: '0 0 .5rem 0',
}))

export const DataLabel = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[800],
    padding: '0 0 .5rem 0',
}))

export const IdLabel = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[300],
    padding: '0 0 .5rem 0',
    fontSize: '.6rem',
}))
