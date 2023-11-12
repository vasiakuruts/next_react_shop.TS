import { instance } from '@/api/api.interceptor'
import { IProduct } from '@/types/product.interface'
import { TDataProducts, TDataProductsFilters } from './product.types'

export const ProductService = {
	async getAll(queryData = {} as TDataProductsFilters) {
		return instance<IProduct[]>({
			url: `/products`,
			method: 'GET',
			params: queryData
		})
	},

	async getSimilar(id: string | number) {
		return instance<IProduct[]>({
			url: `/products/similar/${id}`,
			method: 'GET'
		})
	},

	async getById(id: number | string) {
		return instance<IProduct>({
			url: `/products/${id}`,
			method: 'GET'
		})
	},

	async getSlug(slug: string) {
		return instance<IProduct>({
			url: `/products/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async getByCategory(categorySlug: string) {
		return instance<IProduct>({
			url: `/products/by-category/${categorySlug}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<IProduct>({
			url: `/products`,
			method: 'POST'
		})
	},

	async update(id: number | string, data: TDataProducts) {
		return instance<IProduct>({
			url: `/products/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: number | string) {
		return instance<IProduct>({
			url: `/products/${id}`,
			method: 'DELETE'
		})
	}
}
