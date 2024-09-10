import {ICartItem} from '@/api/interfaces/cart-item.interface'

export interface ICartContext {
    cart: ICartItem[]
    addToCart: (product: ICartItem) => void
    removeFromCart: (productId: number) => void
    updateQuantity: (productId: number, quantity: number) => void
    showSuccessAlert: () => void
    showRemoveFromCartAlert: () => void
}
