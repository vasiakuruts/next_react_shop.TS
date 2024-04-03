import { useCart } from '@/hooks/useCart'
import { CategoryService } from '@/services/category/category.service'
import { ICategory } from '@/types/category.interface'
import { IconButton, Menu } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import {
    AiFillCaretDown,
    AiFillCaretRight,
    AiFillHome,
    AiOutlineCheck
} from 'react-icons/ai'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
import Heading from '../heading/heading'

const Sidebar: FC = () => {
    const [isCatHidden, setIsCatHidden] = useState(false)
    const [categorys, setCategorys] = useState<ICategory[]>([])
    const router = useRouter()
    const { slug } = router.query

    const [anchorSideBarEl, setAnchorSideBarEl] = useState<null | HTMLElement>(
        null
    )
    const isSideBarOpen = Boolean(anchorSideBarEl)

    const handleSideBarOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorSideBarEl(event.currentTarget)
    }
    const handleSideBarClose = () => {
        setAnchorSideBarEl(null)
    }

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

    const SideBarId = 'primary-side-bar'
    const renderSideBarMenu = (
        <>
            <Menu
                anchorEl={anchorSideBarEl}
                id={SideBarId}
                open={isSideBarOpen}
                onClose={handleSideBarClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            left: 18,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0
                        }
                    }
                }}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
                <aside className=' p-5  w-64 bg-secondary'>
                    <Heading className=' w-full text-center pb-6'>
                        SIDEBAR
                    </Heading>

                    <div className=' flex flex-col'>
                        <button onClick={() => router.push('/')}>
                            <div className='flex bg-primary rounded mr-6 justify-between mb-2'>
                                <Heading className=' text-white flex '>
                                    Home
                                </Heading>
                                <AiFillHome color='white' size={'35px'} />
                            </div>
                        </button>
                        <button onClick={() => setIsCatHidden(!isCatHidden)}>
                            <div className='flex bg-primary rounded mr-6 justify-between mb-2'>
                                <Heading className=' text-white flex'>
                                    Category
                                </Heading>
                                {isCatHidden ? (
                                    <AiFillCaretDown
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
            </Menu>
        </>
    )

    if (!categorys) {
        return <div>Loading...</div>
    }
    return (
        <>
            <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='open drawer'
                sx={{ mr: 2 }}
                onClick={handleSideBarOpen}
            >
                {isSideBarOpen ? <IoMdClose /> : <IoIosMenu />}
            </IconButton>
            {renderSideBarMenu}
        </>
    )
}

export default Sidebar
