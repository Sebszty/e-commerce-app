import CategoriesStore from '@/app/store/categories/CategoriesStore'
import {ICategoriesStore} from '@/app/store/categories/interfaces/categories-store.interface'
import {IProductsStore} from '@/app/store/products/interfaces/products-store.interface'
import ProductsStore from '@/app/store/products/ProductsStore'
import {IStore} from '@/setup/store/interfaces/store.interface'
import {create} from 'zustand'

export const useStore = create<IStore, [['zustand/persist', IStore]]>((set, get, store) => ({
    ...CategoriesStore(
        set as (
            partial:
                | ICategoriesStore
                | Partial<ICategoriesStore>
                | ((state: ICategoriesStore) => ICategoriesStore | Partial<ICategoriesStore>),
            replace?: boolean
        ) => void,
        get as () => ICategoriesStore,
        store
    ),

    ...ProductsStore(
        set as (
            partial: ICategoriesStore | Partial<IProductsStore> | ((state: IProductsStore) => IProductsStore | Partial<IProductsStore>),
            replace?: boolean
        ) => void,
        get as () => IProductsStore,
        store
    ),

    // Add more stores here. Remember that localStorage should only be stored where it is actually needed. A large amount of aggregated page data will cause performance issues on the UI.
}))
