import {IProduct} from '@/api/interfaces/product.interface'

export interface IProductsStore {
    products: IProduct[]
    setProducts: (products: IProduct[]) => void
    totalPages: number
    setTotalPages: (totalPages: number) => void
    currentPage: number
    setCurrentPage: (currentPage: number) => void
}
