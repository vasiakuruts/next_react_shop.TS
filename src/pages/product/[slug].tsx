import Layout from '@/components/ui/layout/layout'
import Meta from '@/components/ui/meta/meta'
import { ProductService } from '@/services/product/product.service'
import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
const ProductPage = () => {
    const router = useRouter()
    const { slug } = router.query
    const [product, setProduct] = useState<IProduct>()
    const fetchProduct = async () => {
        try {
            const response = await ProductService.getSlug(`${slug}`)
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
                <Image
                    width={250}
                    height={250}
                    src={product.images[0]}
                    alt={product.name}
                    style={{ height: '250px' }}
                />
                <h1>{product.name}</h1>
                <p>{product.description}</p>
            </Layout>
        </Meta>
    )
}

export default ProductPage
