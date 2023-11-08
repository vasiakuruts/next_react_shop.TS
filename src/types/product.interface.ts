import { ICategory } from './category.interface'
import { IReview } from './review.interface'

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	price: number
	reviews: IReview[]
	images: string[]
	ceatedAt: string
	category: ICategory
}

export interface IProductDetails {
	product: IProduct
}
