import AuthComponents from '@/components/screens/auth/auth.components'
import { NextPage } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const AuthPage: NextPage = () => {
  return <AuthComponents />
}

export default AuthPage
