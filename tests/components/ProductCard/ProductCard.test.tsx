import {ICartItem} from '@/api/interfaces/cart-item.interface'
import ProductCard from '@/app/components/ProductCard/ProductCard'
import {render, screen} from '@testing-library/react'

describe('Product card component', () => {
    test('Render details card component', () => {
        const item: ICartItem = {
            id: 2,
            title: 'Test 2',
            price: 60,
            quantity: 2,
            category: 'Electronics',
            description: 'Electronic parts',
            image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        }

        render(<ProductCard product={item} />)

        expect(screen.getByTestId('ecommerce-product-card')).toBeInTheDocument()
        expect(screen.getByTestId('ecommerce-product-card-img')).toBeInTheDocument()
        expect(screen.getByTestId('ecommerce-product-card-title')).toHaveTextContent('Test 2')
        expect(screen.getByTestId('ecommerce-product-card-price')).toHaveTextContent('$60.00')
        expect(screen.getByTestId('ecommerce-product-card-add-to-cart-button')).toBeInTheDocument()
    })
})
