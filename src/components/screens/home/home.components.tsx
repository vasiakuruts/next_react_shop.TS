import Catalog from '@/components/ui/catalog/catalog'
import Heading from '@/components/ui/heading/heading'
import Meta from '@/components/ui/meta/meta'
import { TPaginationProducts } from '@/types/product.interface'
import { FC } from 'react'

const HomeComponents: FC<TPaginationProducts> = ({ products, length }) => {
    return (
        <Meta title='Home'>
            <Heading>Hello world!</Heading>

            <Catalog products={products} />
        </Meta>
    )
}

export default HomeComponents
