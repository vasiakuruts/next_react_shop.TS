import { useCart } from '@/hooks/useCart'
import { Badge, Box, IconButton, Link, Menu, styled } from '@mui/material'
import { useRouter } from 'next/router'
import * as React from 'react'
import { FC, useEffect } from 'react'
import { IoMdCart } from 'react-icons/io'
import CatalogCart from '../catalog/catalogCart'

const BadgeCartButton: FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
    const [anchorCartEl, setAnchorCartEl] = React.useState<null | HTMLElement>(
        null
    )
    const isCartOpen = Boolean(anchorCartEl)
    const { items } = useCart()
    const router = useRouter()

    const handleCartOpen = (event: React.MouseEvent<HTMLElement>) => {
        isMobile ? router.push('/cart') : setAnchorCartEl(event.currentTarget)
    }
    const handleCartClose = () => {
        setAnchorCartEl(null)
    }
    const OnIsMobile = isMobile ? isMobile : router.pathname !== '/cart'

    useEffect(() => {
        if (items.length === 0) handleCartClose()
    }, [items])

    const StyledMenu = styled(Menu)({
        '& .MuiMenu-paper': {
            maxHeight: '100%',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
                width: '0.4em' // Ширина прокрутки
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#888', // Колір пальця прокрутки
                borderRadius: '4px' // Радіус кутиків пальця прокрутки
            }
        }
    })

    const CartId = 'primary-cart'
    const renderCart = (
        <Menu
            anchorEl={anchorCartEl}
            id={CartId}
            open={isCartOpen && items.length !== 0}
            onClose={handleCartClose}
            sx={{
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiMenu-paper': {
                    maxHeight: '90%',
                    overflowY: 'auto',
                    '&::-webkit-scrollbar': {
                        width: '0.4em' // Ширина прокрутки
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#888', // Колір пальця прокрутки
                        borderRadius: '4px' // Радіус кутиків пальця прокрутки
                    }
                }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <Box className=' p-5 bg-black rounded-xl'>
                <CatalogCart items={items || []} />
                <Link
                    href={'/cart'}
                    className='w-full h-auto bg-primary text-white rounded-xl text-lg font-bold uppercase'
                >
                    Cart Page
                </Link>
            </Box>
        </Menu>
    )
    return (
        <>
            {OnIsMobile && (
                <IconButton
                    size='large'
                    aria-label='show 4 new mails'
                    color='inherit'
                    onClick={handleCartOpen}
                    sx={{
                        marginBottom: isMobile ? '-10px' : '',
                        marginTop: isMobile ? '-10px' : ''
                    }}
                >
                    <Badge badgeContent={items.length} color='error'>
                        <IoMdCart />
                    </Badge>
                </IconButton>
            )}
            {renderCart}
        </>
    )
}

export default BadgeCartButton
