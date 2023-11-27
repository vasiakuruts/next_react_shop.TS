export type TDataProducts = {
    name: string
    price: number
    description?: string
    images: string[]
    categoryId: number
}

export type TDataProductsFilters = {
    sort?: EnumProductSort
    searchTerm?: string
    page?: number | string
    perPage?: number | string
}

export enum EnumProductSort {
    HIGH_PRICE = 'high-price',
    LOW_PRICE = 'low-price',
    NEWEST = 'newest',
    OLDEST = 'oldest'
}
