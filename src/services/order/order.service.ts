import { instance } from '@/api/api.interceptor'
import { IOrder } from '@/types/order.interface'

export const OrdersService = {
	async getAll() {
		return instance<IOrder[]>({
			url: `/orders`,
			method: 'GET'
		})
	}
}
