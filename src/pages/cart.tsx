import CatalogCart from '@/components/ui/catalog/catalogCart'
import Layout from '@/components/ui/layout/layout'
import Meta from '@/components/ui/meta/meta'
import { useCart } from '@/hooks/useCart'
const ProductPage = () => {
    const { items } = useCart()
    return (
        <Meta title='Category'>
            <Layout>
                <CatalogCart title={`Cart`} items={items || []} />
            </Layout>
        </Meta>
    )
}

export default ProductPage
