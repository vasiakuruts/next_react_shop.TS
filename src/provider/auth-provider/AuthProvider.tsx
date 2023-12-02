import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { getAccessToken, getRefreshToken } from '@/services/auth/auth.helper'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'
import { TComponentAuthFields } from './auth-page.types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<PropsWithChildren<TComponentAuthFields>> = ({
    Component: { isOnlyUser },
    children
}) => {
    const { user } = useAuth()
    const { checkAuth, logOut } = useActions()
    const { pathname } = useRouter()
    let x

    useEffect(() => {
        const accessToken = getAccessToken()

        if (!accessToken) {
            return undefined
        } else {
            checkAuth()
        }
    }, [])

    useEffect(() => {
        const refreshToken = getRefreshToken()
        if (!refreshToken && user) logOut()
    }, [pathname])

    return isOnlyUser ? (
        <DynamicCheckRole Component={{ isOnlyUser }} children={children} />
    ) : (
        <>{children}</>
    )
}

export default AuthProvider
