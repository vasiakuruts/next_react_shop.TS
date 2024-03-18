import { useActions } from '@/hooks/useActions'
import { ICartItem } from '@/types/cart.interface'
import { FC } from 'react'
import Button from '../button/button'
import Heading from '../heading/heading'
import Loader from '../loader/loader'
import ProductItem from './product-item/product-item'

interface ICatalog {
    items: ICartItem[]
    isLoading?: boolean
    title?: string
}

const CatalogCart: FC<ICatalog> = ({ items, isLoading, title }) => {
    const { changeQuntity } = useActions()
    if (isLoading) return <Loader />
    return (
        <section>
            {title && <Heading className='mb-5'>{title}</Heading>}
            {items.length ? (
                <div className='grid grid-cols-5 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-3 max-xl:grid-cols-4 gap-10'>
                    {items.map(items => (
                        <>
                            <ProductItem
                                key={items.product.id}
                                product={items.product}
                            />
                            <h1>{items.quantity}</h1>
                            <h2>{items.price * items.quantity}</h2>
                            <Button
                                variant='orange'
                                onClick={() =>
                                    changeQuntity({
                                        id: items.id,
                                        type: 'plus'
                                    })
                                }
                            >
                                +
                            </Button>
                            <Button
                                variant='orange'
                                onClick={() =>
                                    changeQuntity({
                                        id: items.id,
                                        type: 'minus',
                                        size: 'GRANDE'
                                    })
                                }
                            >
                                -
                            </Button>
                        </>
                    ))}
                </div>
            ) : (
                <div>There are no products</div>
            )}
        </section>
    )
}

export default CatalogCart
