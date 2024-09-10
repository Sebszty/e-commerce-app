import {getCategories} from '@/api/category'
import {ICategory} from '@/api/interfaces/category.interface'
import CartIcon from '@/app/components/CartIcon/CartIcon'
import {ICategoriesStore} from '@/app/store/categories/interfaces/categories-store.interface'
import {useStore} from '@/setup'
import Link from 'next/link'
import {useEffect} from 'react'
import {useShallow} from 'zustand/react/shallow'

const MainPage = () => {
    const store = useStore(useShallow((state: ICategoriesStore) => state))

    useEffect(() => {
        const loadCategories = async () => {
            const fetchedCategories = await getCategories()
            store.setCategories(fetchedCategories)
        }
        loadCategories()
    }, [])

    return (
        <div className='container mx-auto px-4'>
            <header className='flex justify-between items-center py-4'>
                <h1 className='text-2xl font-bold'>E-commerce Store</h1>
                <CartIcon />
            </header>
            <main>
                <h2 className='text-xl font-semibold mb-4'>Categories</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {store.categories.map((category: ICategory) => (
                        <Link href={`/category/${category.name}`} key={category.id}>
                            <div className='border p-4 rounded hover:bg-gray-100 cursor-pointer'>
                                <h3 className='text-lg font-medium'>{category.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default MainPage
