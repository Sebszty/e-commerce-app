import {IProductCardProps} from '@/app/components/ProductCard/interfaces/product-cart-props.interface'
import {useCart} from '@/app/context/cart.context'
import Image from 'next/image'
import {FC} from 'react'

const ProductCard: FC<IProductCardProps> = ({product}) => {
    const {addToCart} = useCart()

    return (
        <div className='border p-4 rounded flex flex-col h-full' data-testid='ecommerce-product-card'>
            <div className='relative h-64 w-full mb-4'>
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='object-contain'
                    priority
                    data-testid='ecommerce-product-card-img'
                />
            </div>
            <div className='flex-grow'>
                <h3 className='text-lg font-medium' data-testid='ecommerce-product-card-title'>
                    {product.title}
                </h3>
                <p className='text-gray-600 mt-2' data-testid='ecommerce-product-card-price'>
                    ${product.price.toFixed(2)}
                </p>
            </div>
            <button
                onClick={() => addToCart({...product, quantity: 1})}
                className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full'
                data-testid='ecommerce-product-card-add-to-cart-button'
            >
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard
