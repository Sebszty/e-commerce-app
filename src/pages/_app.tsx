import ErrorBoundary from '@/app/components/ErrorBoundary/ErrorBoundary'
import {CartProvider} from '@/app/context/cart.context'
import HydrationZustand from '@/app/core/helpers/components/HydrationZustand'
import {setupAxios} from '@/setup'
import '@/styles/globals.scss'
import axios from 'axios'
import {ThemeProvider} from 'next-themes'
import type {AppProps} from 'next/app'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

setupAxios(axios)

const App = ({Component, pageProps}: AppProps) => {
    // useReportWebVitals()

    return (
        <ThemeProvider forcedTheme='light'>
            <ErrorBoundary>
                <HydrationZustand>
                    <CartProvider>
                        <Component {...pageProps} />
                        <ToastContainer />
                    </CartProvider>
                </HydrationZustand>
            </ErrorBoundary>
        </ThemeProvider>
    )
}

export default App
