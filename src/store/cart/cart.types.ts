import { ICartItem } from '@/types/cart.interface'

export interface ICartInitialState {
    items: ICartItem[]
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuntityPayload extends Pick<ICartItem, 'id'> {
    type?: 'minus' | 'plus'
    quntity?: number
}

export type TSize = 'SHORT' | 'TALL' | 'GRANDE' | 'VENTI'

export interface IChangeQuntityPayload extends Pick<ICartItem, 'id'> {
    size?: TSize
}
