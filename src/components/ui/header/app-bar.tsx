import { useCart } from '@/hooks/useCart'
import useIsMobile from '@/hooks/useIsMobile'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import InputBase from '@mui/material/InputBase'
import { alpha, styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { IoMdSearch } from 'react-icons/io'
import RenderAvatarMenu from '../avatar/render-avatar-menu'
import BadgeCartButton from '../button/badge-cart-button'
import Sidebar from '../sidebar/sidebar'
import BottomBar from './bottom-bar'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto'
    }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch'
        }
    }
}))
const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -10,
    left: 0,
    right: 0,
    margin: '0 auto'
})

export default function PrimaryAppBar() {
    const { items } = useCart()
    const router = useRouter()
    const isMobile = useIsMobile()

    return !isMobile ? (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static'>
                    <Toolbar>
                        <Sidebar />
                        <Typography
                            variant='h6'
                            noWrap
                            component='div'
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            MUI
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <IoMdSearch />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder='Search…'
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <BadgeCartButton />
                            <RenderAvatarMenu />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    ) : (
        <BottomBar />
    )
}
