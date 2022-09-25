import { Box, alpha } from '@mui/material'
import { styled } from '@mui/material'

export const Wrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    padding: '2rem',
    boxShadow: `0 5px 10px ${alpha(theme.palette.common.black, 0.15)}`,
    margin: '0 3rem',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
}))
