import { instance } from '@/api/api.interceptor'
import { IReview } from '@/types/review.interface'
import { TDataReview } from './review.types'

export const ReviewsService = {
	async getAll() {
		return instance<IReview[]>({
			url: `/reviews`,
			method: 'GET'
		})
	},

	async leave(productId: number | string, data: TDataReview) {
		return instance<IReview>({
			url: `/reviews/leave${productId}`,
			method: 'POST',
			data
		})
	},

	async delete(id: number | string) {
		return instance<IReview>({
			url: `/reviews/${id}`,
			method: 'DELETE'
		})
	}
}
