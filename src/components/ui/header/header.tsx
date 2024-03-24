import AuthComponents from '@/components/screens/auth/auth.components'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { useProfile } from '@/hooks/useProfile'
import { FC, useState } from 'react'

import { useCart } from '@/hooks/useCart'
import { IoLogIn, IoLogInOutline, IoLogOut } from 'react-icons/io5'
import CartCount from '../button/catrs_count'
import CatalogCart from '../catalog/catalogCart'
import Heading from '../heading/heading'

const Header: FC = () => {
    const [isHiddenAuth, setHiddenAuth] = useState(false)
    const [isHiddenOption, setHiddenOption] = useState(false)
    const [isHiddenCart, setHiddenCart] = useState(false)

    const { items } = useCart()
    const { user } = useAuth()
    const { profile } = useProfile()
    const { logOut } = useActions()
    return (
        <div className='bg-secondary w-full flex'>
            <Heading className=' w-full text-center text-white pb-6'>
                Header
            </Heading>
            <CartCount
                onClick={() => {
                    if (items.length !== 0) setHiddenCart(!isHiddenCart)
                }}
            />
            {isHiddenCart && (
                <div
                    className={
                        ' absolute top-16 left-1/2 -translate-x-1/2 p-5 max-h-full overflow-y-auto z-10 bg-black rounded-xl'
                    }
                >
                    <CatalogCart items={items || []} />
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
                        {isHiddenOption ? (
                            <div className=' bg-secondary absolute  top-16  right-0 h-0 z-10 '>
                                <button onClick={() => logOut()}>
                                    <div className=' bg-primary rounded mr-6'>
                                        <Heading className=' text-white flex '>
                                            LogOut
                                            <IoLogOut size={'35px'} />
                                        </Heading>
                                    </div>
                                </button>
                            </div>
                        ) : (
                            <></>
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
