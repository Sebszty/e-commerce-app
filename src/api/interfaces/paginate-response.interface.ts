export interface IPaginatedResponse<T> {
    data: T[]
    totalPages: number
    currentPage: number
}
