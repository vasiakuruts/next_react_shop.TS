import { IProduct } from '@/types/product.interface'
import { convertPrice } from '@/utils/convert-price'
import { Box, Card } from '@mui/material'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FC } from 'react'
import AddToCartButton from './add-to-cart-button'
import ProductImageStepper from './product-image-stepper'
import ProductRating from './product-rating'

const DynamicFavorteButton = dynamic(() => import('./favorite-button'), {
    ssr: false
})

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
    return (
        <Card>
            <Box
                sx={{
                    position: 'absolute',
                    padding: '8px'
                }}
            >
                <DynamicFavorteButton productId={product.id} />
                <AddToCartButton product={product} />
            </Box>
            <ProductImageStepper images={product.images} />
            <Link href={`/product/${product.slug}`}></Link>
            <Link href={`/product/${product.slug}`}>
                <h3 className='mt-2 font-semibold text-lg '>{product.name}</h3>
            </Link>
            <Link
                href={`/category/${product.category.slug}`}
                className='text-aqua text-sm mb-2'
            >
                {product.category.name}
            </Link>
            {product.reviews && <ProductRating product={product} />}
            <div className=' text-xl font-semibold'>
                {convertPrice(product.price)}
            </div>
        </Card>
    )
}

export default ProductItem
