import { Logout } from '@mui/icons-material'
import {
    MenuList,
    MenuItem,
    Button,
    useTheme,
    Popover,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { FunctionComponent } from 'react'
import { UserService } from '../../../../services/UserService'
import { useAuthStore } from '../../../../store/useAuthStore'
import { useUserStore } from '../../../../store/useUserStore'
import { Avatar } from '../Avatar/Avatar.component'
import { HeaderProps } from './Header.interface'
import { SouthAmerica, Article } from '@mui/icons-material'
import { WhiteButton } from './Header.styles'

export const Header: FunctionComponent<HeaderProps> = ({
    onLogout,
    ...props
}) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null)
    const { getUser } = useUserStore()
    const theme = useTheme()

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    return (
        <header {...props}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                px="1rem"
                py="0.4rem"
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    columnGap="1rem"
                >
                    <WhiteButton
                        variant="text"
                        startIcon={
                            <SouthAmerica
                                fontSize="small"
                                htmlColor={theme.palette.common.white}
                            />
                        }
                    >
                        Estados
                    </WhiteButton>

                    <WhiteButton
                        variant="text"
                        startIcon={
                            <Article
                                fontSize="small"
                                htmlColor={theme.palette.common.white}
                            />
                        }
                    >
                        Relatório
                    </WhiteButton>
                </Box>

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Avatar
                        name={getUser()?.name || 'Loading User Info'}
                        size={40}
                        onClick={handleClick}
                    />

                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        onMouseLeave={handleClose}
                    >
                        <MenuList>
                            <MenuItem onClick={onLogout}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>

                                <ListItemText>Sair</ListItemText>
                            </MenuItem>
                        </MenuList>
                    </Popover>
                </Box>
            </Box>
        </header>
    )
}
