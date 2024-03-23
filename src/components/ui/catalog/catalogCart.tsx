import { ICartItem } from '@/types/cart.interface'
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
    if (isLoading) return <Loader />
    return (
        <section>
            {title && <Heading className='mb-5'>{title}</Heading>}
            {items.length ? (
                <div className=' container mx-auto'>
                    {items.map(items => (
                        <ProductItemCart key={items.product.id} items={items} />
                    ))}
                </div>
            ) : (
                <div>There are no products</div>
            )}
        </section>
    )
}

export default CatalogCart
