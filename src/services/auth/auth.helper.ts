import { IAuthResponse, ITokens } from '@/store/user/user.interface'
import Cookies from 'js-cookie'

export const getAccessToken = async () => {
    const accessToken = Cookies.get('accessToken')
    return accessToken || null
}

export const getRefreshToken = async () => {
    const refreshToken = Cookies.get('refreshToken')
    return refreshToken || null
}

export const getUserFromStorage = async () => {
    return JSON.parse(localStorage.getItem('user') || '{}')
}

export const saveTokensStorage = (data: ITokens) => {
    Cookies.set('accessToken', data.accessToken)
    Cookies.set('refreshToken', data.refreshToken)
}

export const removeFromStorage = () => {
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')
    localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
    saveTokensStorage(data)
    localStorage.setItem('user', JSON.stringify(data.user))
    console.log('====================================')
    console.log('auth.helper.ts', 34, data)
    console.log('====================================')
}
