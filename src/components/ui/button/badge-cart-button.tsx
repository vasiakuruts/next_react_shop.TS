import { useCart } from '@/hooks/useCart'
import { Badge, Box, IconButton, Link, Modal } from '@mui/material'
import { useRouter } from 'next/router'
import * as React from 'react'
import { FC, useEffect } from 'react'
import { IoMdCart } from 'react-icons/io'
import CatalogCart from '../catalog/catalogCart'

const BadgeCartButton: FC<{
    isMobile?: boolean
}> = ({ isMobile = false }) => {
    const [anchorCartEl, setAnchorCartEl] = React.useState<null | HTMLElement>(
        null
    )
    const isCartOpen = Boolean(anchorCartEl)
    const { items } = useCart()
    const router = useRouter()

    const handleCartOpen = (event: React.MouseEvent<HTMLElement>) => {
        isMobile ? router.push('/cart') : setAnchorCartEl(event.currentTarget)
    }
    const OnIsMobile = isMobile
        ? router.pathname === '/cart'
        : router.pathname !== '/cart'

    const handleCartClose = () => {
        setAnchorCartEl(null)
    }
    useEffect(() => {
        if (items.length === 0) handleCartClose()
    }, [items])

    const CartId = 'primary-cart'
    const renderCart = (
        <Modal
            id={CartId}
            open={isCartOpen && items.length !== 0}
            onClose={handleCartClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box className=' absolute top-16 left-1/2 -translate-x-1/2 p-5 max-h-full overflow-y-auto z-10 bg-black rounded-xl'>
                <CatalogCart items={items || []} />
                <Link
                    href={'/cart'}
                    className='w-full h-auto bg-primary text-white rounded-xl text-lg font-bold uppercase'
                >
                    Cart Page
                </Link>
            </Box>
        </Modal>
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
