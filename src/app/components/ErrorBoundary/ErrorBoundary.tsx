import {IErrorState} from '@/app/components/ErrorBoundary/interfaces/error-state.interface'
import {BaseLayoutProps} from '@/app/core/base/interfaces/base-layout.props'
import {Component, ErrorInfo} from 'react'

class ErrorBoundary extends Component<BaseLayoutProps, IErrorState> {
    public state: IErrorState = {
        hasError: false,
    }

    public static getDerivedStateFromError(_: Error): IErrorState {
        return {hasError: true}
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo)
    }

    public render() {
        if (this.state.hasError) {
            return <h1>Sorry.. there was an error</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary
