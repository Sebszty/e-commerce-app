import {ICategory} from '@/api/interfaces/category.interface'
import {ICategoriesStore} from '@/app/store/categories/interfaces/categories-store.interface'
import {StateCreator} from 'zustand'

const CategoriesStore: StateCreator<ICategoriesStore> = (set) => ({
    categories: [],
    setCategories: (categories: ICategory[]) => set({categories}),
})

export default CategoriesStore
