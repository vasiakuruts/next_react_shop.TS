import Catalog from '@/components/ui/catalog/catalog'
import Layout from '@/components/ui/layout/layout'
import Meta from '@/components/ui/meta/meta'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { TPaginationProducts } from '@/types/product.interface'
import { FC } from 'react'

const HomeComponents: FC<TPaginationProducts> = ({ products, length }) => {
    const { user } = useAuth()
    const { logOut } = useActions()
    return (
        <Meta title='Home'>
            <Layout>
                {!!user && <button onClick={() => logOut()}>Logout</button>}
                <Catalog title='Freshed products' products={products || []} />
            </Layout>
        </Meta>
    )
}

export default HomeComponents
