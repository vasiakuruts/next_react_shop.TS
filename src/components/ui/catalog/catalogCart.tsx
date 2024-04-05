import { ICartItem } from '@/types/cart.interface'
import {
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
    const renderCartTable = (
        <>
            <TableContainer component={Paper}>
                <Table aria-label='collapsible table'>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell />
                            <TableCell>Name</TableCell>
                            <TableCell align='right'>Price</TableCell>
                            <TableCell align='right'>Amount</TableCell>
                            <TableCell align='right'>Common price</TableCell>
                            <TableCell />
                            <TableCell />
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
        <section>
            {title && <Heading className='mb-5'>{title}</Heading>}
            {items.length ? (
                <div className=' container mx-auto'>
                    {renderCartTable}
                    {/* {items.map(items => (
                        <ProductItemCart key={items.product.id} items={items} />
                    ))} */}
                </div>
            ) : (
                <div>There are no products</div>
            )}
        </section>
    )
}

export default CatalogCart
