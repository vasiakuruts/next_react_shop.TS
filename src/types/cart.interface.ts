import { IProduct } from './product.interface'

export interface ICartItem {
	id: number
	productId: IProduct
	quantity: number
	price: number
}
