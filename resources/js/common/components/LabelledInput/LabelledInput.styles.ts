import { styled } from '@mui/material'
import { alpha } from '@mui/system'
import TextField from '@mui/material/TextField'

export const CustomLabelledInput = styled(TextField)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column-reverse',
    rowGap: '.8rem',
    marginLeft: '0 !important',
    marginRight: '0 !important',
    fontSize: '0.6rem !important',
    color: '#00559b',
    width: '100%',

    '& > *': {
        width: '100%',
    },

    '& > input': {
        padding: '0.5rem 0.625rem',
        margin: '0',
    },
}))
