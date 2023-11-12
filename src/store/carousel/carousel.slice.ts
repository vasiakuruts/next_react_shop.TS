import { createSlice } from '@reduxjs/toolkit'

export const carouselSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: state => state + 1
	}
})
