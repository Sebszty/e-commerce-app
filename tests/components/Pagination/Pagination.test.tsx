import Pagination from '@/app/components/Pagination/Pagination'
import {render, screen} from '@testing-library/react'

describe('Pagination component', () => {
    const onChangeEmitterMock = jest.fn()
    test('Render details pagination component', () => {
        render(<Pagination currentPage={2} totalPages={8} onPageChange={onChangeEmitterMock} />)

        expect(screen.getByTestId('ecommerce-pagination')).toBeInTheDocument()
        expect(screen.getAllByTestId(/ecommerce-pagination-button-/)).toHaveLength(8)

        onChangeEmitterMock(3)

        expect(screen.getByTestId('ecommerce-pagination-button-2')).toHaveClass('bg-blue-500 text-white')
    })
})
