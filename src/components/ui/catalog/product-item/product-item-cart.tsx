import { useActions } from '@/hooks/useActions'
import { ICartItem } from '@/types/cart.interface'
import { convertPrice } from '@/utils/convert-price'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import {
    AiFillCaretLeft,
    AiOutlineDelete,
    AiOutlineMinus,
    AiOutlinePlus
} from 'react-icons/ai'
import Button from '../../button/button'

const DynamicFavorteButton = dynamic(() => import('./favorite-button'), {
    ssr: false
})

const ProductItemCart: FC<{ items: ICartItem }> = ({ items }) => {
    const { changeQuntity, changeQuntityType, removeFromCart } = useActions()
    const [inputValue, setInputValue] = useState(items.quantity)
    const [isHiddenOk, setIsHiddenOk] = useState(true)
    useEffect(() => {
        setInputValue(items.quantity)
    }, [items.quantity])

    // Обробник зміни значення в інпуті
    const handleChange = (event: any) => {
        if (event.target.value > 0) {
            setInputValue(event.target.value)
            setIsHiddenOk(false)
        } else {
            setInputValue(1)
        }
    }
    const handleSubmit = (event: any) => {
        event.preventDefault()
        changeQuntity({
            id: items.id,
            quntity: inputValue
        })
        setIsHiddenOk(true)
    }
    return (
        <div className='flex items-center bg-white rounded-xl overflow-hidden mb-4'>
            <div className='m-2'>
                <DynamicFavorteButton size={30} productId={items.product.id} />
            </div>
            <Link href={`/product/${items.product.slug}`}>
                <Image
                    width={80}
                    height={80}
                    src={items.product.images[0]}
                    alt={items.product.name}
                    className=' w-1/6'
                    style={{
                        width: '80px',
                        height: '80px',
                        border: '1px solid #000000'
                    }}
                />
            </Link>
            <div className='ml-4 w-1/4 border-2 mr-4'>
                <Link href={`/product/${items.product.slug}`}>
                    <h3 className='font-semibold text-lg'>
                        {items.product.name}
                    </h3>
                </Link>
            </div>
            <div className='flex justify-around mt-6 w-1/3'>
                <div className='mr-4 border-2 w-1/4'>
                    <h2 className='font-semibold'>Price</h2>
                    {convertPrice(items.product.price)}
                </div>
                <div className=' w-1/3 border-2 mr-4'>
                    <h2 className='font-semibold'>Amount</h2>
                    <form onSubmit={handleSubmit} className=' flex mr-4'>
                        <input
                            type='number'
                            className='w-10 action:border-hidden'
                            value={inputValue}
                            onChange={handleChange}
                        />
                        <button
                            className=' w-10'
                            type='submit'
                            hidden={isHiddenOk}
                        >
                            <AiFillCaretLeft />
                        </button>
                    </form>
                </div>
                <div className='w-1/2 border-2'>
                    <h2 className='font-semibold'>Common price</h2>
                    <h2>{convertPrice(items.price * items.quantity)}</h2>
                </div>
            </div>

            <div className=' flex items-center w-1/4 ml-auto'>
                <Button
                    variant='orange'
                    onClick={() =>
                        changeQuntityType({
                            id: items.id,
                            type: 'plus'
                        })
                    }
                >
                    <AiOutlinePlus />
                </Button>
                <Button
                    disabled={items.quantity === 1}
                    variant='orange'
                    onClick={() =>
                        changeQuntityType({
                            id: items.id,
                            type: 'minus'
                        })
                    }
                >
                    <AiOutlineMinus />
                </Button>
                <Button
                    variant='orange'
                    onClick={() => removeFromCart({ id: items.id })}
                >
                    <AiOutlineDelete />
                </Button>
            </div>
        </div>
    )
}

export default ProductItemCart
