import { ReviewsService } from '@/services/review/review.service'
import { IProduct } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { Rating } from 'react-simple-star-rating'

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
    const { data: rating } = useQuery({
        queryKey: ['get product rating', product.id],
        queryFn: () => ReviewsService.getAverageByProduct(product.id),
        select: ({ data }) => data
    })
    return (
        <div>
            <Rating
                readonly
                initialValue={rating}
                SVGstyle={{
                    display: 'inline-block'
                }}
                size={34}
                allowFraction
                transition
            />
            <span>({product.reviews.length} reviews)</span>
        </div>
    )
}

export default ProductRating
