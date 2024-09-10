import {Connection} from '@/api/config/connection'
import {IPaginatedResponse} from '@/api/interfaces/paginate-response.interface'
import {IProduct} from '@/api/interfaces/product.interface'
import axios from 'axios'

export const getProductsByCategory = async (
    categoryName: string,
    page: number = 1,
    limit: number = 10
): Promise<IPaginatedResponse<IProduct>> => {
    try {
        const fakeStoreApi = new Connection()
        const response = await axios.get(`${fakeStoreApi.baseUrl}products/category/${categoryName}`, {
            params: {limit, skip: (page - 1) * limit},
        })
        const totalCount = parseInt(response.headers['x-total-count'] || '0', 10)
        return {
            data: response.data,
            totalPages: Math.ceil(totalCount / limit),
            currentPage: page,
        }
    } catch (error) {
        console.error('Error fetching products:', error)
        throw error
    }
}
