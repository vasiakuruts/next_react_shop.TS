import AuthComponents from '@/components/screens/auth/auth.components'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { FC, useEffect, useState } from 'react'
import Heading from '../heading/heading'

const Header: FC = () => {
    const [isHiddenAuth, setHiddenAuth] = useState(false)
    const { user } = useAuth()
    const { logOut } = useActions()
    const removeAuthPage = useEffect(() => setHiddenAuth(!isHiddenAuth), [user])
    return (
        <div className='bg-secondary w-full flex'>
            <Heading className=' w-full text-center text-white pb-6'>
                Header
            </Heading>
            {!!user ? (
                <>
                    <button onClick={() => logOut()}>
                        <Heading className=' text-white mr-6'>LOGOUT</Heading>
                    </button>
                    {removeAuthPage}
                </>
            ) : (
                <button onClick={() => setHiddenAuth(!isHiddenAuth)}>
                    <Heading className=' text-white mr-6'>AUTH</Heading>
                </button>
            )}
            {isHiddenAuth && (
                <aside className='h-screen bg-secondary absolute block top-12 w-1/4 right-0 z-10'>
                    <AuthComponents />
                </aside>
            )}
        </div>
    )
}

export default Header
