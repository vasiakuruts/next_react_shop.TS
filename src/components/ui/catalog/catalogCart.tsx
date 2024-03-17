import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import Heading from '../heading/heading'
import Loader from '../loader/loader'
import ProductItem from './product-item/product-item'
import { ICartItem } from '@/types/cart.interface'

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
                <div className='grid grid-cols-5 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-3 max-xl:grid-cols-4 gap-10'>
                    {items.map(items => (
                        <ProductItem key={items.product.id} product={items.product} />
                    ))}
                </div>
            ) : (
                <div>There are no products</div>
            )}
        </section>
    )
}

export default CatalogCart
