import { useProfile } from '@/hooks/useProfile'
import { ICartItem } from '@/types/cart.interface'
import {
    Box,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material'
import { FC } from 'react'
import Heading from '../heading/heading'
import Loader from '../loader/loader'
import ProductItemCart from './product-item/product-item-cart'

interface ICatalog {
    items: ICartItem[]
    isLoading?: boolean
    title?: string
}

const CatalogCart: FC<ICatalog> = ({ items, isLoading, title }) => {
    const { profile } = useProfile()

    const renderCartTable = (
        <>
            <TableContainer component={Paper} sx={{ maxHeight: 1000 }}>
                <Table stickyHeader aria-label='collapsible table'>
                    <TableHead>
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
        <Container>
            {title && <Heading className='mb-5'>{title}</Heading>}
            {items.length ? renderCartTable : <Box>There are no products</Box>}
        </Container>
    )
}

export default CatalogCart
