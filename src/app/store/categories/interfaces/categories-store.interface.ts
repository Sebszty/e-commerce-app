import {ICategory} from '@/api/interfaces/category.interface'

export interface ICategoriesStore {
    categories: ICategory[]
    setCategories: (categories: ICategory[]) => void
}
