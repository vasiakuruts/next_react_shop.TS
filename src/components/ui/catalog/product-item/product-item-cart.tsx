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

    // Обробник подання форми
    const handleSubmit = (event: any) => {
        event.preventDefault()
        // Використання значення, що було введене користувачем
        changeQuntity({
            id: items.id,
            quntity: inputValue
        })
        setIsHiddenOk(true)
        // Тут ви можете виконати додаткові дії зі значенням, наприклад, передати його до іншого компонента або до сервера
    }
    return (
        <div className=' pb-4'>
            <div className=' flex  items-center bg-white rounded-xl overflow-hidden'>
                <DynamicFavorteButton productId={items.product.id} />
                <Link
                    style={{ padding: '10px 30px' }}
                    href={`/product/${items.product.slug}`}
                >
                    <Image
                        width={80}
                        height={80}
                        src={items.product.images[0]}
                        alt={items.product.name}
                        style={{
                            width: '80px',
                            height: '80px',
                            border: '1px solid #000000'
                        }}
                    />
                </Link>
                <Link href={`/product/${items.product.slug}`}>
                    <h3 className='mt-2 font-semibold text-lg w-80'>
                        {items.product.name}
                    </h3>
                </Link>
                <div className=' text-xl font-semibold flex justify-around w-1/3'>
                    {convertPrice(items.product.price)}

                    <form onSubmit={handleSubmit} className=''>
                        {/* Введення користувача зберігається в стані */}
                        <input
                            type='number'
                            className=' w-10'
                            value={inputValue}
                            onChange={handleChange}
                        />
                        <Button
                            className='w-5'
                            variant='orange'
                            type='submit'
                            hidden={isHiddenOk}
                        >
                            <AiFillCaretLeft />
                        </Button>
                    </form>
                    <h2>{convertPrice(items.price * items.quantity)}</h2>
                </div>
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
