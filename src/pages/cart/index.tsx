import CartItem from '@/app/components/CartItem/CartItem'
import {useCart} from '@/app/context/cart.context'
import Link from 'next/link'
import {useEffect, useState} from 'react'

const CartPage = () => {
    const {cart, removeFromCart, updateQuantity} = useCart()
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const newTotal = cart.reduce((sum, item) => {
            const itemPrice = typeof item.price === 'number' && !isNaN(item.price) ? item.price : 0
            const itemQuantity = typeof item.quantity === 'number' && !isNaN(item.quantity) ? item.quantity : 0
            return sum + itemPrice * itemQuantity
        }, 0)
        setTotal(isNaN(newTotal) ? 0 : newTotal)
    }, [cart])

    const formatTotal = (value: number): string => {
        return isNaN(value) ? '0.00' : value.toFixed(2)
    }

    return (
        <div className='container mx-auto px-4'>
            <header className='flex justify-between items-center py-4'>
                <Link href='/'>
                    <h1 className='text-2xl font-bold cursor-pointer'>E-commerce Store</h1>
                </Link>
            </header>
            <main>
                <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        {cart.map((item) => (
                            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
                        ))}
                        <div className='mt-4'>
                            <p className='text-xl font-bold'>Total: ${formatTotal(total)}</p>
                        </div>
                    </>
                )}
            </main>
        </div>
    )
}

export default CartPage
