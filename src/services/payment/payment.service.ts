import { instance } from '@/api/api.interceptor'
import { IPaymentResponse } from '@/types/payment.interface'

export const PaymentService = {
	async createPayment(amount: number) {
		return instance.post<IPaymentResponse>('payment', {
			amount
		})
	}
}
