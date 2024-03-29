import { useCart } from '@/hooks/useCart'
import { CategoryService } from '@/services/category/category.service'
import { ICategory } from '@/types/category.interface'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import {
    AiFillCaretDown,
    AiFillCaretRight,
    AiFillHome,
    AiOutlineCheck
} from 'react-icons/ai'
import Heading from '../heading/heading'

const Sidebar: FC<{ isHidden: boolean }> = ({ isHidden }) => {
    const [isCatHidden, setIsCatHidden] = useState(false)
    const [categorys, setCategorys] = useState<ICategory[]>([])
    const router = useRouter()
    const { slug } = router.query

    const { items } = useCart()
    const fetchCategory = async () => {
        try {
            // Call the 'getByCategory' method from the 'ProductService' module, passing the slug as an argument
            const response = await CategoryService.getAll()
            setCategorys(response.data)
        } catch (error) {
            console.error('Failed to fetch product')
        }
    }

    // Run the 'fetchProduct' function when the slug is available
    useEffect(() => {
        fetchCategory()
    }, [isCatHidden])

    if (!categorys) {
        return <div>Loading...</div>
    }
    return (
        <aside
            className=' p-5 max-h-full overflow-y-auto bg-secondary'
            style={{ display: `${isHidden ? 'block' : 'none'}` }}
        >
            <Heading className=' w-full text-center pb-6'>SIDEBAR</Heading>

            <div className=' flex flex-col'>
                <button onClick={() => router.push('/')}>
                    <div className='flex bg-primary rounded mr-6 justify-between mb-2'>
                        <Heading className=' text-white flex '>Home</Heading>
                        <AiFillHome color='white' size={'35px'} />
                    </div>
                </button>
                <button onClick={() => setIsCatHidden(!isCatHidden)}>
                    <div className='flex bg-primary rounded mr-6 justify-between mb-2'>
                        <Heading className=' text-white flex'>Category</Heading>
                        {isCatHidden ? (
                            <AiFillCaretDown color='white' size={'35px'} />
                        ) : (
                            <AiFillCaretRight color='white' size={'35px'} />
                        )}
                    </div>
                    {isCatHidden && (
                        <div className='ml-4 flex flex-col mb-2'>
                            {categorys.map(category => (
                                <button
                                    onClick={() =>
                                        router.push(
                                            `/category/${category.slug}`
                                        )
                                    }
                                >
                                    <div className='flex bg-primary rounded mr-6 justify-between mb-1'>
                                        <h2 className='font-semibold text-2xl text-white'>
                                            {category.name}
                                        </h2>
                                        {slug === category.slug ? (
                                            <AiOutlineCheck
                                                color='white'
                                                size={'35px'}
                                            />
                                        ) : (
                                            <AiFillCaretRight
                                                color='white'
                                                size={'35px'}
                                            />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </button>
            </div>
        </aside>
    )
}

export default Sidebar
