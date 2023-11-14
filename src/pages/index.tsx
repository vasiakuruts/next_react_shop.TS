import { NextPage } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage = () => {
  return <h1 className='text-3x1 font-bold underline'> Hello world!</h1>
}

export default HomePage
