import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import Loader from '../loader/loader'
import ProductItem from './product-item/product-item'
import Heading from '../heading/heading'

interface ICatalog {
    products: IProduct[]
    isLoading?: boolean
    title?: string
}

const Catalog: FC<ICatalog> = ({ products, isLoading, title }) => {
    if (isLoading) return <Loader />
    return (
        <section>
            {title && <Heading>{title}</Heading>}
            {products.length ? (
                products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))
            ) : (
                <div>There are no products</div>
            )}
        </section>
    )
}

export default Catalog
