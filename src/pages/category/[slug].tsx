import Catalog from '@/components/ui/catalog/catalog'
import Layout from '@/components/ui/layout/layout'
import Meta from '@/components/ui/meta/meta'
import { ProductService } from '@/services/product/product.service'
import { IProduct } from '@/types/product.interface'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
const ProductPage = () => {
    const router = useRouter()
    const { slug } = router.query
    const [product, setProduct] = useState<IProduct[]>()
    const fetchProduct = async () => {
        try {
            // Call the 'getByCategory' method from the 'ProductService' module, passing the slug as an argument
            const response = await ProductService.getByCategory(`${slug}`)
            setProduct(response.data)
        } catch (error) {
            console.error('Failed to fetch product')
        }
    }
    useEffect(() => {
        if (slug) {
            fetchProduct()
        }
    }, [slug])

    if (!product) {
        return <div>Loading...</div>
    }

    return (
        <Meta title='Category'>
            <Layout>
                <Catalog
                    title={`Category ${product[0]?.category.name}`}
                    products={product || []}
                />
            </Layout>
        </Meta>
    )
}

export default ProductPage
