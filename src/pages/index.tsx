import HomeComponents from '@/components/screens/home/home.components'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'
import { NextPage } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage = () => {
  useAuthRedirect()
  return <HomeComponents />
}

export default HomePage
