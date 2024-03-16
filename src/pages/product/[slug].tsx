import { ProductService } from '@/services/product/product.service'
import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ProductPage = () => {
    const router = useRouter()
    const { slug } = router.query
    const [product, setProduct] = useState<IProduct>()

    useEffect(() => {
        const fetchProduct = async () => {
            // Отримання даних продукту за допомогою слагу
            try {
                const response = await ProductService.getSlug(`${slug}`)
                setProduct(response.data)
            } catch (error) {
                console.error('Failed to fetch product')
            }
        }

        if (slug) {
            fetchProduct()
        }
    }, [slug])

    if (!product) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Image
                width={250}
                height={250}
                src={product.images[0]}
                alt={product.name}
                style={{ height: '250px' }}
            />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            {/* Додатковий вміст про продукт */}
        </div>
    )
}

export default ProductPage
