import { instance } from '@/api/api.interceptor'
import { IFullUser, IUser } from '@/types/user.interface'
import { TDataUser } from './user.types'

export const userService = {
    async getProfile() {
        return instance<IFullUser>({
            url: `/users/profile`,
            method: 'GET'
        })
    },

    async updateProfile(data: TDataUser) {
        return instance<IUser>({
            url: `/users/profile`,
            method: 'PUT',
            data
        })
    },

    async toggleFavorite(productId: number | string) {
        return instance<IUser>({
            url: `/users/profile/favorites/${productId}`,
            method: 'PATCH'
        })
    }
}
