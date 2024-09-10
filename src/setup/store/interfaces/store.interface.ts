import {ICategoriesStore} from '@/app/store/categories/interfaces/categories-store.interface'
import {IProductsStore} from '@/app/store/products/interfaces/products-store.interface'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IStore extends ICategoriesStore {}
export interface IStore extends IProductsStore {}
// Add more module interfaces here
