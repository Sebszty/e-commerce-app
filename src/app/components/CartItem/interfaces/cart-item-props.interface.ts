import {ICartItem} from '@/api/interfaces/cart-item.interface'

export interface ICartItemProps {
    item: ICartItem
    removeFromCart: (productId: number) => void
    updateQuantity: (productId: number, quantity: number) => void
}
