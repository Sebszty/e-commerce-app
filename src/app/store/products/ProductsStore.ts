import {IProduct} from '@/api/interfaces/product.interface'
import {IProductsStore} from '@/app/store/products/interfaces/products-store.interface'
import {StateCreator} from 'zustand'

const ProductsStore: StateCreator<IProductsStore> = (set) => ({
    products: [],
    setProducts: (products: IProduct[]) => set({products}),
    totalPages: 0,
    setTotalPages: (totalPages: number) => set({totalPages}),
    currentPage: 1,
    setCurrentPage: (currentPage: number) => set({currentPage}),
})

export default ProductsStore
