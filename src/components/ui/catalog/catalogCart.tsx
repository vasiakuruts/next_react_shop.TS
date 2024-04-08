import useHeight from '@/hooks/useHeigth'
import useIsMobile from '@/hooks/useIsMobile'
import { useProfile } from '@/hooks/useProfile'
import { ICartItem } from '@/types/cart.interface'
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material'
import { FC } from 'react'
import Loader from '../loader/loader'
import ProductItemCart from './product-item/product-item-cart'

interface ICatalog {
    items: ICartItem[]
    isLoading?: boolean
    title?: string
}

const CatalogCart: FC<ICatalog> = ({ items, isLoading, title }) => {
    const { profile } = useProfile()
    const heigth = useHeight()
    const isMobile = useIsMobile()

    const renderCartTable = (
        <>
            <TableContainer
                component={Paper}
                sx={{ maxHeight: `${heigth - (isMobile ? 60 : 120)}px` }}
            >
                <Table stickyHeader aria-label='collapsible table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>{title}</TableCell>
                        </TableRow>
                        <TableRow>
                            {profile && <TableCell>Favorite</TableCell>}
                            <TableCell>Image</TableCell>
                            <TableCell>Name Product</TableCell>
                            <TableCell align='right'>Price</TableCell>
                            <TableCell align='right'>Amount</TableCell>
                            <TableCell align='right'>Common Price</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map(items => (
                            <ProductItemCart
                                key={items.product.id}
                                items={items}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )

    if (isLoading) return <Loader />
    return (
        <>{items.length ? renderCartTable : <Box>There are no products</Box>}</>
    )
}

export default CatalogCart
