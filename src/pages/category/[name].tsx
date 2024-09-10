import {IProduct} from '@/api/interfaces/product.interface'
import {getProductsByCategory} from '@/api/product'
import {IProductsStore} from '@/app/store/products/interfaces/products-store.interface'
import {useStore} from '@/setup'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {useShallow} from 'zustand/react/shallow'
import CartIcon from '../../app/components/CartIcon/CartIcon'
import Pagination from '../../app/components/Pagination/Pagination'
import ProductCard from '../../app/components/ProductCard/ProductCard'

const CategoryPage = () => {
    const router = useRouter()
    const {name} = router.query
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const store = useStore(useShallow((state: IProductsStore) => state))

    useEffect(() => {
        if (name) {
            const loadProducts = async () => {
                setIsLoading(true)
                setError(null)
                try {
                    const response = await getProductsByCategory(name as string, store.currentPage)

                    store.setProducts(response.data)
                    store.setTotalPages(response.totalPages)
                } catch (err) {
                    setError('Failed to load products. Please try again later.')
                } finally {
                    setIsLoading(false)
                }
            }
            loadProducts()
        }
    }, [name, store.currentPage])

    const handlePageChange = (page: number): void => {
        store.setCurrentPage(page)
    }

    if (isLoading) return <div>Loading...</div>
    if (error) return <div className='text-red-500'>{error}</div>

    return (
        <div className='container mx-auto px-4'>
            <header className='flex justify-between items-center py-4'>
                <Link href='/'>
                    <h1 className='text-2xl font-bold cursor-pointer'>E-commerce Store</h1>
                </Link>
                <CartIcon />
            </header>
            <main>
                <h2 className='text-xl font-semibold mb-4'>
                    {store.products[0]?.category} ({store.products.length} products)
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {store.products.map((product: IProduct) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <Pagination currentPage={store.currentPage} totalPages={store.totalPages} onPageChange={handlePageChange} />
            </main>
        </div>
    )
}

export default CategoryPage
