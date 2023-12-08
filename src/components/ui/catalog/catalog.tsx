import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import Heading from '../heading/heading'
import Loader from '../loader/loader'
import ProductItem from './product-item/product-item'

interface ICatalog {
    products: IProduct[]
    isLoading?: boolean
    title?: string
}

const Catalog: FC<ICatalog> = ({ products, isLoading, title }) => {
    if (isLoading) return <Loader />
    return (
        <section>
            {title && <Heading className='mb-5'>{title}</Heading>}
            {products.length ? (
                <div className='grid grid-cols-5 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-3 max-xl:grid-cols-4 gap-10'>
                    {products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div>There are no products</div>
            )}
        </section>
    )
}

export default Catalog
