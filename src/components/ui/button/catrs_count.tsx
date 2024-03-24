import { useCart } from '@/hooks/useCart'
import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiPlainCircle } from 'react-icons/gi'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'orange' | 'white'
}

const CartCount: FC<PropsWithChildren<IButton>> = ({
    children,
    className,
    variant,
    ...rest
}) => {
    const { items } = useCart()
    return (
        <>
            <button {...rest} className={cn('mr-5', className)}>
                <h1
                    className=' absolute font-bold text-xl -mt-1 z-10 font-mono'
                    style={{ paddingLeft: '5px', color: 'white' }}
                >
                    {items.length}
                </h1>
                <GiPlainCircle className=' absolute' size={23} color='red' />
                <AiOutlineShoppingCart
                    className=' -ml-5'
                    size={40}
                    color='orange'
                />
                {children}
            </button>
        </>
    )
}

export default CartCount
