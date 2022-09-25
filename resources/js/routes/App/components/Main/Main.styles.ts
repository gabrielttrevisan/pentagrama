import { Typography } from '@mui/material'
import { styled } from '@mui/material'
import Pagination from '@mui/material/Pagination'

export const CustomTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
}))

export const WhitePagination = styled(Pagination)(({ theme }) => ({
    color: `${theme.palette.common.white} !important`,

    '& .MuiPaginationItem-root': {
        color: `${theme.palette.common.white} !important`,
    },

    '& > svg': {
        fill: `${theme.palette.common.white} !important`,
    },

    '& > svg > path': {
        fill: `${theme.palette.common.white} !important`,
    },
}))
