import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
    IAddToCartPayload,
    ICartInitialState,
    IChangeQuntityPayload
} from './cart.types'

const initialState: ICartInitialState = {
    items: []
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
            const isExist = state.items.some(
                item => item.product.id === action.payload.product.id
            )
            if (!isExist)
                state.items.push({ ...action.payload, id: state.items.length })
        },
        removeFromCart: (
            state,
            action: PayloadAction<{
                id: number
            }>
        ) => {
            state.items = state.items.filter(
                item => item.id !== action.payload.id
            )
        },
        changeQuntity: (
            state,
            action: PayloadAction<IChangeQuntityPayload>
        ) => {
            const { id, quntity } = action.payload
            const item = state.items.find(item => item.id === id)
            if (item) !!quntity ? (item.quantity = quntity) : ''
        },
        changeQuntityType: (
            state,
            action: PayloadAction<IChangeQuntityPayload>
        ) => {
            const { id, type } = action.payload
            const item = state.items.find(item => item.id === id)
            if (item) type === 'plus' ? item.quantity++ : item.quantity--
        },
        reset: state => {
            state.items = []
        }
    }
})
