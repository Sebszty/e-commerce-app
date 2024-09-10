import {ICartItem} from '@/api/interfaces/cart-item.interface'
import CartItem from '@/app/components/CartItem/CartItem'
import {render, screen} from '@testing-library/react'

describe('Cart item component', () => {
    const onChangeEmitterMock = jest.fn()

    test('Render property cart item', () => {
        const item: ICartItem = {
            id: 2,
            title: 'Test 2',
            price: 20,
            quantity: 1,
            category: 'Electronics',
            description: 'Electronic parts',
            image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        }

        render(<CartItem item={item} removeFromCart={onChangeEmitterMock} updateQuantity={onChangeEmitterMock} />)

        expect(screen.getByTestId('ecommerce-cart-item')).toBeInTheDocument()
        expect(screen.getByTestId('ecommerce-cart-item-title')).toHaveTextContent('Test 2')
        expect(screen.getByTestId('ecommerce-cart-item-price')).toHaveTextContent('$20.00')
        expect(screen.getByTestId('ecommerce-cart-item-quantity-input')).toHaveValue(1)
        expect(screen.getByTestId('ecommerce-cart-item-remove-button')).toBeInTheDocument()
    })
})
