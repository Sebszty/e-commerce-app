import CartIcon from '@/app/components/CartIcon/CartIcon'
import {CartProvider, useCart} from '@/app/context/cart.context'
import {render, screen} from '@testing-library/react'
import React from 'react'

const CartIconComponent = () => {
    const {addToCart} = useCart()

    React.useEffect(() => {
        addToCart({id: 1, title: 'Test', price: 10, quantity: 1, category: 'Electronics', description: 'Electronic parts', image: 'test'})
        addToCart({
            id: 2,
            title: 'Test 2',
            price: 20,
            quantity: 1,
            category: 'Electronics',
            description: 'Electronic parts',
            image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        })
        addToCart({
            id: 3,
            title: 'Test 3',
            price: 30,
            quantity: 1,
            category: 'Electronics',
            description: 'Electronic parts',
            image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        })
    }, [])

    return <CartIcon />
}

describe('Cart icon component', () => {
    test('Render simple cart icon', () => {
        render(
            <CartProvider>
                <CartIconComponent />
            </CartProvider>
        )

        expect(screen.getByTestId('ecommerce-cart-icon')).toBeInTheDocument()
        expect(screen.getByTestId('ecommerce-cart-icon')).toHaveTextContent('3')
    })
})
