import AuthComponents from '@/components/screens/auth/auth.components'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { useProfile } from '@/hooks/useProfile'
import { FC, useEffect, useState } from 'react'

import { useCart } from '@/hooks/useCart'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoLogIn, IoLogInOutline } from 'react-icons/io5'
import CartCount from '../button/catrs-count'
import CatalogCart from '../catalog/catalogCart'
import Heading from '../heading/heading'
import Profile from '../porofile/profile'

const Header: FC = () => {
    const [isHiddenAuth, setHiddenAuth] = useState(false)
    const [isHiddenOption, setHiddenOption] = useState(false)
    const [isHiddenCart, setHiddenCart] = useState(false)

    const { items } = useCart()
    const { user } = useAuth()
    const { profile } = useProfile()
    const { logOut } = useActions()
    const router = useRouter()

    useEffect(() => {
        if (items.length === 0) setHiddenCart(false)
    }, [items.length])

    return (
        <div className='bg-secondary w-full flex'>
            <Heading className=' w-full text-center text-white pb-6'>
                Header
            </Heading>
            {router.pathname !== '/cart' && (
                <CartCount
                    onClick={() => {
                        if (items.length !== 0) setHiddenCart(!isHiddenCart)
                    }}
                />
            )}
            {isHiddenCart && items.length !== 0 && (
                <div className=' absolute top-16 left-1/2 -translate-x-1/2 p-5 max-h-full overflow-y-auto z-10 bg-black rounded-xl'>
                    <CatalogCart items={items || []} />
                    <Link
                        href={'/cart'}
                        className='w-full h-auto bg-primary text-white rounded-xl text-lg font-bold uppercase'
                    >
                        Cart Page
                    </Link>
                </div>
            )}

            {!!user ? (
                <>
                    <div className=' flex'>
                        <Heading className=' text-white pr-6 pt-3'>
                            {!!profile ? profile.name : 'name'}
                        </Heading>
                        <button
                            onClick={() => setHiddenOption(!isHiddenOption)}
                        >
                            <img
                                width={60}
                                height={60}
                                className=' rounded-full mr-6'
                                src={!!profile ? profile.avatarPath : ''}
                                alt={!!profile ? profile.name : 'name'}
                            />
                        </button>
                        {isHiddenOption && (
                            <div className=' bg-secondary absolute grid top-16 w\12  right-0 h-0 z-10 '>
                                <Profile />
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <button onClick={() => setHiddenAuth(!isHiddenAuth)}>
                        <div className=' bg-primary rounded mr-6'>
                            <Heading className=' text-white flex'>
                                LogIn
                                {!isHiddenAuth ? (
                                    <IoLogIn size={'35px'} />
                                ) : (
                                    <IoLogInOutline size={'35px'} />
                                )}
                            </Heading>
                        </div>
                    </button>
                    {isHiddenAuth && (
                        <div className=' bg-secondary absolute top-12  right-0 h-0 z-10 '>
                            <AuthComponents />
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default Header
