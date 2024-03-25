import { useActions } from '@/hooks/useActions'
import { FC } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { IoLogOut } from 'react-icons/io5'
import Heading from '../heading/heading'
import router from 'next/router'

const Profile: FC = () => {
    const { logOut } = useActions()

    return (
        <>
            <button onClick={() => router.push('favorite')}>
                <div className=' bg-primary rounded mr-6'>
                    <Heading className=' text-white flex '>
                        Favorite
                        <AiFillHeart size={'35px'} />
                    </Heading>
                </div>
            </button>
            <button onClick={() => logOut()}>
                <div className='flex bg-primary rounded mr-6 justify-between'>
                    <Heading className=' text-white flex '>LogOut</Heading>
                    <IoLogOut className='' color='white' size={'35px'} />
                </div>
            </button>
        </>
    )
}

export default Profile
