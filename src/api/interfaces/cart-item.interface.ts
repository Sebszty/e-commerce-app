import {IProduct} from '@/api/interfaces/product.interface'

export interface ICartItem extends IProduct {
    quantity: number
}
