import { NextPageAuth } from '@/provider/auth-provider/auth-page.types'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPageAuth = () => {
  return <div>HOME</div>
}

export default HomePage
