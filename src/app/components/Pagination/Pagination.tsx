import {IPaginationProps} from '@/app/components/Pagination/interfaces/pagination-props.interface'
import {FC} from 'react'

const Pagination: FC<IPaginationProps> = ({currentPage, totalPages, onPageChange}) => {
    return (
        <div className='flex justify-center mt-4' data-testid='ecommerce-pagination'>
            {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    data-testid={`ecommerce-pagination-button-` + page}
                    className={`mx-1 px-3 py-1 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    {page}
                </button>
            ))}
        </div>
    )
}

export default Pagination
