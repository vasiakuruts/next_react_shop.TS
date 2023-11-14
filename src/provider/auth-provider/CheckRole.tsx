import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'
import { TComponentAuthFields } from './auth-page.types'

const CheckRole: FC<PropsWithChildren<TComponentAuthFields>> = ({
  Component: { isOnlyUser },
  children
}) => {
  const { user } = useAuth()

  const router = useRouter()
  console.log('====================================')
  console.log('CheckRole.tsx', 13, isOnlyUser)
  console.log('====================================')

  if (user && isOnlyUser) return <>{children}</>

  router.pathname !== '/auth' && router.replace('/auth')
  return null
}

export default CheckRole
