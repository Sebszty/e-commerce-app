'use client'
import {ICartItem} from '@/api/interfaces/cart-item.interface'
import {ICartContext} from '@/app/context/interfaces/cart-context.interface'
import {BaseLayoutProps} from '@/app/core/base/interfaces/base-layout.props'
import {createContext, FC, useContext, useEffect, useState} from 'react'
import {toast} from 'react-toastify'

const CartContext = createContext<ICartContext>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    updateQuantity: () => {},
    showSuccessAlert: () => {},
    showRemoveFromCartAlert: () => {},
})

export const CartProvider: FC<BaseLayoutProps> = ({children}) => {
    const [cart, setCart] = useState<ICartItem[]>([])

    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('cart')
            if (savedCart) {
                setCart(JSON.parse(savedCart))
            }
        } catch (error) {
            console.error('Error parsing cart from local storage:', error)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product: ICartItem): void => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id)
            if (existingItem) {
                return prevCart.map((item) => (item.id === product.id ? {...item, quantity: item.quantity + 1} : item))
            }

            return [...prevCart, {...product, quantity: 1}]
        })

        showSuccessAlert()
    }

    const removeFromCart = (productId: number): void => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
        showRemoveFromCartAlert()
    }

    const updateQuantity = (productId: number, quantity: number): void => {
        setCart((prevCart) => prevCart.map((item) => (item.id === productId ? {...item, quantity: Math.max(0, quantity)} : item)))
    }

    const showSuccessAlert = (): void => {
        toast('Item added to cart successfully')
    }

    const showRemoveFromCartAlert = (): void => {
        toast('Item removed from cart successfully')
    }

    const value: ICartContext = {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        showSuccessAlert,
        showRemoveFromCartAlert,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}
