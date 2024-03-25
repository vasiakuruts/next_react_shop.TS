import { useCart } from '@/hooks/useCart'
import { CategoryService } from '@/services/category/category.service'
import { ICategory } from '@/types/category.interface'
import router from 'next/router'
import { FC, useEffect, useState } from 'react'
import { IoLogOut } from 'react-icons/io5'
import Heading from '../heading/heading'

const Sidebar: FC<{ isHidden: boolean }> = ({ isHidden }) => {
    const [isCatHidden, setIsCatHidden] = useState(false)
    const [categorys, setCategorys] = useState<ICategory[]>([])
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
            className=' h-screen bg-secondary'
            style={{ display: `${isHidden ? 'block' : 'none'}` }}
        >
            <Heading className=' w-full text-center pb-6'>SIDEBAR</Heading>

            <div className=' flex flex-col'>
                <button onClick={() => router.push('/')}>
                    <div className='flex bg-primary rounded mr-6 justify-between'>
                        <Heading className=' text-white flex '>Home</Heading>
                        <IoLogOut className='' color='white' size={'35px'} />
                    </div>
                </button>
                <button onClick={() => setIsCatHidden(!isCatHidden)}>
                    <div className='flex bg-primary rounded mr-6 justify-between'>
                        <Heading className=' text-white flex '>
                            Category
                        </Heading>
                        <IoLogOut className='' color='white' size={'35px'} />
                    </div>
                    {isCatHidden && (
                        <div className='ml-4 flex flex-col'>
                            {categorys.map(category => (
                                <button
                                    onClick={() =>
                                        router.push(
                                            `/category/${category.slug}`
                                        )
                                    }
                                >
                                    <div className='flex bg-primary rounded mr-6 justify-between'>
                                        <Heading className=' text-white flex '>
                                            {category.name}
                                        </Heading>
                                        <IoLogOut
                                            className=''
                                            color='white'
                                            size={'35px'}
                                        />
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
