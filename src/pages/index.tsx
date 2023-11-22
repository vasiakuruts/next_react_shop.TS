import HomeComponents from '@/components/screens/home/home.components'
import { NextPage } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage = () => {
  return <HomeComponents />
}

export default HomePage
