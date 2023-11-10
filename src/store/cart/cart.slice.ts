import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: state => state + 1
	}
})
