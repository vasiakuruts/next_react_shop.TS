import { useCart } from '@/hooks/useCart'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { AiFillHeart, AiFillHome } from 'react-icons/ai'
import BadgeCartButton from '../button/badge-cart-button'

const BottomBar: FC = () => {
    const router = useRouter()
    const { items } = useCart()

    const [value, setValue] = useState(0)

    useEffect(() => {
        const arrAdres = ['/', '/favorite', '/cart', 'messege', '/profile']
        for (let x = 0; x <= arrAdres.length; x++) {
            if (router.pathname === arrAdres[x]) return setValue(x)
        }
    }, [router.pathname])

    return (
        <>
            <AppBar
                position='fixed'
                color='secondary'
                sx={{ top: 'auto', bottom: 0 }}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                >
                    <BottomNavigationAction
                        onClick={() => router.push('/')}
                        label='Home'
                        icon={<AiFillHome size={'25px'} />}
                    />
                    <BottomNavigationAction
                        onClick={() => router.push('/favorite')}
                        label='Favorites'
                        icon={<AiFillHeart size={'25px'} />}
                    />
                    <BottomNavigationAction
                        onClick={() => router.push('/cart')}
                        label='Cart'
                        icon={<BadgeCartButton isMobile={true} />}
                    />
                    <BottomNavigationAction
                        onClick={() => router.push('/massege')}
                        label='Massege'
                        icon={<AiFillHeart size={'25px'} />}
                    />
                    <BottomNavigationAction
                        onClick={() => router.push('/profile')}
                        label='Profile'
                        icon={<AiFillHeart size={'25px'} />}
                    />
                </BottomNavigation>
            </AppBar>
        </>
    )
}

export default BottomBar
{
    /* <Tabs
value={value}
onChange={handleChange}
aria-label='icon label tabs example'
sx={{ marginLeft: '-20px', width: '100%' }}
>
<Tab
    sx={{ fontSize: '10px' }}
    onClick={() => router.push('/')}
    icon={<AiFillHome color='white' size={'25px'} />}
    label='Home'
/>
<Tab
    sx={{ fontSize: '10px', marginLeft: '-20px' }}
    icon={<AiFillHeart color='white' size={'25px'} />}
    label='FAVORITES'
/>
<Tab
    sx={{ fontSize: '10px', marginLeft: '-20px' }}
    icon={<AiFillHeart />}
    label='NEARBY'
/>
<Tab icon={<AiFillHeart />} label='NEARBY' />
<Tab icon={<AiFillHeart />} label='NEARBY' />
</Tabs> */
}
