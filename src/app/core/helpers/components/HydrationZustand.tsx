import {IHydrationZustand} from '@/app/core/helpers/components/interfaces/hydration-zustand'
import {FC, useEffect, useState} from 'react'

const HydrationZustand: FC<IHydrationZustand> = ({children}) => {
    const [isHydrated, setIsHydrated] = useState(false)

    useEffect(() => {
        setIsHydrated(true)
    }, [])

    return <>{isHydrated ? <div>{children}</div> : null}</>
}

export default HydrationZustand
