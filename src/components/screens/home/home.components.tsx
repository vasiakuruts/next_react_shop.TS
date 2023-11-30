import Catalog from '@/components/ui/catalog/catalog'
import Meta from '@/components/ui/meta/meta'
import { TPaginationProducts } from '@/types/product.interface'
import { FC } from 'react'

const HomeComponents: FC<TPaginationProducts> = ({ products, length }) => {
    return (
        <Meta title='Home'>
            <Catalog title='Freshed products' products={products || []} />
        </Meta>
    )
}

export default HomeComponents
