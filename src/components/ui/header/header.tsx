import AuthComponents from '@/components/screens/auth/auth.components'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { FC, useEffect, useState } from 'react'
import { IoLogIn, IoLogInOutline, IoLogOut } from 'react-icons/io5'
import Heading from '../heading/heading'
;<IoLogOut />

const Header: FC = () => {
    const [isHiddenAuth, setHiddenAuth] = useState(false)
    const { user } = useAuth()
    const { logOut } = useActions()
    const removeAuthPage = useEffect(() => setHiddenAuth(false), [user])
    return (
        <div className='bg-secondary w-full flex'>
            <Heading className=' w-full text-center text-white pb-6'>
                Header
            </Heading>
            {!!user ? (
                <>
                    <button onClick={() => logOut()}>
                        <div className=' bg-primary rounded mr-6'>
                            <Heading className=' text-white flex '>
                                LogOut
                                <IoLogOut size={'35px'} />
                            </Heading>
                        </div>
                    </button>
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
