import { useCart } from '@/hooks/useCart'
import { CategoryService } from '@/services/category/category.service'
import { ICategory } from '@/types/category.interface'
import { Box, Container, IconButton, Popper, Typography } from '@mui/material'
import Link from 'next/link'
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
            <Popper
                anchorEl={anchorSideBarEl}
                id={SideBarId}
                open={isSideBarOpen}
                sx={{ zIndex: 10 }}
            >
                <Container className=' p-5  w-64 bg-secondary'>
                    <Heading className=' w-full text-center pb-6'>
                        SIDEBAR
                    </Heading>
                    <Box className=' flex flex-col'>
                        <Link href={'/'}>
                            <Box className='flex bg-primary rounded mr-6 justify-between mb-2'>
                                <Heading className=' text-white flex '>
                                    Home
                                </Heading>
                                <AiFillHome color='white' size={'35px'} />
                            </Box>
                        </Link>
                        <button onClick={() => setIsCatHidden(!isCatHidden)}>
                            <Box className='flex bg-primary rounded mr-6 justify-between mb-2'>
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
                            </Box>
                            {isCatHidden && (
                                <Box className='ml-4 flex flex-col mb-2'>
                                    {categorys.map(category => (
                                        <Box key={category.id}>
                                            <Link
                                                href={`/category/${category.slug}`}
                                            >
                                                <Box className='flex bg-primary rounded mr-6 justify-between mb-1'>
                                                    <Typography
                                                        variant='h6'
                                                        className='font-semibold text-2xl text-white'
                                                    >
                                                        {category.name}
                                                    </Typography>
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
                                                </Box>
                                            </Link>
                                        </Box>
                                    ))}
                                </Box>
                            )}
                        </button>
                    </Box>
                </Container>
            </Popper>
        </>
    )

    if (!categorys) {
        return <Box>Loading...</Box>
    }
    return (
        <>
            <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='open drawer'
                sx={{ mr: 2 }}
                onClick={isSideBarOpen ? handleSideBarClose : handleSideBarOpen}
            >
                {isSideBarOpen ? <IoMdClose /> : <IoIosMenu />}
            </IconButton>
            {renderSideBarMenu}
        </>
    )
}

export default Sidebar
