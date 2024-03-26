import Catalog from '@/components/ui/catalog/catalog'
import Layout from '@/components/ui/layout/layout'
import Meta from '@/components/ui/meta/meta'
import { useCart } from '@/hooks/useCart'
import { useProfile } from '@/hooks/useProfile'
const ProductPage = () => {
    const { profile } = useProfile()
    if (!profile) return null
    return (
        <Meta title='Favorite'>
            <Layout>
                <Catalog products={profile.favorites} />
            </Layout>
        </Meta>
    )
}

export default ProductPage
