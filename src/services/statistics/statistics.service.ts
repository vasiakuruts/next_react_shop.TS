import { instance } from '@/api/api.interceptor'
import { IOrder } from '@/types/order.interface'
import { TStatistics } from '@/services/statistics/statistics.types'

export const StatisticsService = {
	async getMain() {
		return instance<TStatistics[]>({
			url: `/statistics/main`,
			method: 'GET'
		})
	}
}
