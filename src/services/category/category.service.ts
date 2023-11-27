import { axiosClassic, instance } from '@/api/api.interceptor'
import { ICategory } from '@/types/category.interface'

export const CategoryService = {
    async getAll() {
        return axiosClassic<ICategory[]>({
            url: `/categories`,
            method: 'GET'
        })
    },

    async getById(id: number | string) {
        return instance<ICategory>({
            url: `/categories/${id}`,
            method: 'GET'
        })
    },

    async getSlug(slug: string) {
        return axiosClassic<ICategory>({
            url: `/categories/by-slug/${slug}`,
            method: 'GET'
        })
    },

    async create() {
        return instance<ICategory>({
            url: `/categories`,
            method: 'POST'
        })
    },

    async update(id: number | string, name: string) {
        return instance<ICategory>({
            url: `/categories/${id}`,
            method: 'PUT',
            data: { name }
        })
    },

    async delete(id: number | string) {
        return instance<ICategory>({
            url: `/categories/${id}`,
            method: 'DELETE'
        })
    }
}
