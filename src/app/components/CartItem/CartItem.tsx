import {ICartItemProps} from '@/app/components/CartItem/interfaces/cart-item-props.interface'
import Image from 'next/image'
import React, {FC} from 'react'

const CartItem: FC<ICartItemProps> = ({item, removeFromCart, updateQuantity}) => {
    const handleRemove = (): void => {
        removeFromCart(item.id)
    }

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        updateQuantity(item.id, parseInt(e.target.value, 10))
    }

    return (
        <div className='flex items-center border-b pb-4 mb-4' data-testid='ecommerce-cart-item'>
            <div className='w-20 h-20 relative mr-4'>
                <Image
                    src={item.image}
                    alt={item.title}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    fill
                    className='object-contain'
                />
            </div>
            <div className='flex-1'>
                <h3 className='text-sm font-medium' data-testid='ecommerce-cart-item-title'>
                    {item.title}
                </h3>
                <p className='text-gray-600' data-testid='ecommerce-cart-item-price'>
                    ${item.price.toFixed(2)}
                </p>
            </div>
            <div className='flex items-center'>
                <input
                    type='number'
                    min='1'
                    className='w-16 px-2 py-1 border text-black rounded mr-2'
                    value={item.quantity}
                    onChange={handleQuantityChange}
                    data-testid='ecommerce-cart-item-quantity-input'
                />
                <button
                    onClick={handleRemove}
                    className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
                    data-testid='ecommerce-cart-item-remove-button'
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CartItem
