import {useEffect} from 'react'
import {onLCP, onFID, onCLS, onFCP, onTTFB} from 'web-vitals'

export const useReportWebVitals = (): void => {
    useEffect(() => {
        if (typeof document !== undefined && process.env.NODE_ENV == 'development') {
            onCLS(console.log)
            onFID(console.log)
            onLCP(console.log)
            onFCP(console.log)
            onTTFB(console.log)
        }
    }, [])
}
