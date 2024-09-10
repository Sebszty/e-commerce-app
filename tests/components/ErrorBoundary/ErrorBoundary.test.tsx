import ErrorBoundary from '@/app/components/ErrorBoundary/ErrorBoundary'
import {render, screen} from '@testing-library/react'

const ErrorComponent = () => {
    throw new Error('Test error')
}

const NormalComponent = () => <div>Normal component</div>

describe('ErrorBoundary', () => {
    const originalError = console.error
    beforeAll(() => {
        console.error = jest.fn()
    })

    afterAll(() => {
        console.error = originalError
    })

    test('renders children when there is no error', () => {
        render(
            <ErrorBoundary>
                <NormalComponent />
            </ErrorBoundary>
        )

        expect(screen.getByText('Normal component')).toBeInTheDocument()
    })

    test('Renders error message when child component throws', () => {
        render(
            <ErrorBoundary>
                <ErrorComponent />
            </ErrorBoundary>
        )

        expect(screen.getByText('Sorry.. there was an error')).toBeInTheDocument()
    })

    test('Calls componentDidCatch when error occurs', () => {
        const componentDidCatchSpy = jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch')

        render(
            <ErrorBoundary>
                <ErrorComponent />
            </ErrorBoundary>
        )

        expect(componentDidCatchSpy).toHaveBeenCalled()
        componentDidCatchSpy.mockRestore()
    })
})
