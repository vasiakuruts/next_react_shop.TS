import AuthComponents from '@/components/screens/auth/auth.components'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useProfile } from '@/hooks/useProfile'
import {
    Badge,
    Box,
    Divider,
    IconButton,
    ListItemIcon,
    MenuItem,
    Modal,
    Typography
} from '@mui/material'
import Menu from '@mui/material/Menu'
import router from 'next/router'
import { FC, useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { IoIosMail, IoIosNotifications, IoIosSettings } from 'react-icons/io'
import { IoLogOut } from 'react-icons/io5'
import AvatarUser from './avatar-user'

const RenderAvatarMenu: FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [anchorAuthEl, setAnchorAuthEl] = useState<null | HTMLElement>(null)

    const { user } = useAuth()
    const { profile } = useProfile()
    const { logOut } = useActions()

    const isMenuOpen = Boolean(anchorEl)
    const isAuthOpen = Boolean(anchorAuthEl)

    const handleCartOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorAuthEl(event.currentTarget)
    }

    const handleAuthClose = () => {
        setAnchorAuthEl(null)
    }

    const mobalAuthId = 'primary-mobalAuth'
    const mobalAuth = (
        <Modal
            id={mobalAuthId}
            open={isAuthOpen && !user}
            onClose={handleAuthClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box className=' absolute top-1/4 left-1/2 -translate-x-1/2 p-5 max-h-full overflow-y-auto z-10 bg-black rounded-xl'>
                <AuthComponents />
            </Box>
        </Modal>
    )

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }
    useEffect(() => {
        !!user ? handleAuthClose() : handleMenuClose()
    }, [user])

    const menuId = 'primary-search-account-menu'
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            id={menuId}
            open={isMenuOpen}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1
                    },
                    '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0
                    }
                }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={handleMenuClose}>
                <AvatarUser />
                <Typography sx={{ fontWeight: '600' }} variant='h6'>
                    {' '}
                    {profile?.name}
                </Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => router.push('favorite')}>
                <ListItemIcon>
                    <AiFillHeart />
                </ListItemIcon>
                Favorite
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <IoIosSettings />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={() => logOut()}>
                <ListItemIcon>
                    <IoLogOut />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    )

    return (
        <>
            {!!user && (
                <>
                    <IconButton
                        size='large'
                        aria-label='show 4 new mails'
                        color='inherit'
                    >
                        <Badge badgeContent={4} color='error'>
                            <IoIosMail />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size='large'
                        aria-label='show 17 new notifications'
                        color='inherit'
                    >
                        <Badge badgeContent={17} color='error'>
                            <IoIosNotifications />
                        </Badge>
                    </IconButton>
                </>
            )}
            <IconButton
                size='large'
                edge='end'
                aria-label='account of current user'
                aria-controls={menuId}
                aria-haspopup='true'
                onClick={!!user ? handleProfileMenuOpen : handleCartOpen}
                color='inherit'
            >
                <AvatarUser />
            </IconButton>
            {renderMenu}
            {mobalAuth}
        </>
    )
}
export default RenderAvatarMenu
