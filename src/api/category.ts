import {Connection} from '@/api/config/connection'
import {ICategory} from '@/api/interfaces/category.interface'
import axios from 'axios'

export const getCategories = async (): Promise<ICategory[]> => {
    try {
        const fakeStoreApi = new Connection()
        const response = await axios.get(`${fakeStoreApi.baseUrl}products/categories`)
        return response.data.map((name: string, index: number) => ({id: index + 1, name}))
    } catch (error) {
        console.error('Error fetching categories:', error)
        throw error
    }
}
