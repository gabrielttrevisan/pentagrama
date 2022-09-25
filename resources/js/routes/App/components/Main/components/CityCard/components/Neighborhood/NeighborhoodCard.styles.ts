import { Chip, alpha } from '@mui/material'
import { styled } from '@mui/material'

export const Wrapper = styled(Chip)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.primary.light, 0.75),
    color: theme.palette.common.white,
    padding: '.8rem 1rem',
    boxShadow: `0 5px 10px ${alpha(theme.palette.common.black, 0.15)}`,
    cursor: 'pointer',
    transition: 'all .15s ease-in',
    transform: 'scale(1)',
    marginRight: '1rem',
    textTransform: 'capitalize',

    '&:hover': {
        transform: 'scale(1.05)',
    },
}))
