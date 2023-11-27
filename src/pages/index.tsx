import HomeComponents from '@/components/screens/home/home.components'
import { ProductService } from '@/services/product/product.service'
import { TPaginationProducts } from '@/types/product.interface'
import { GetStaticProps, NextPage } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage<TPaginationProducts> = ({ length, products }) => {
    return <HomeComponents products={products} length={length} />
}

export const getStaticProps: GetStaticProps<TPaginationProducts> = async () => {
    const { data } = await ProductService.getAll({
        page: 1,
        perPage: 4
    })

    return {
        props: data
    }
}

export default HomePage
