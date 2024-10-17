'use client'

import useLayoutInit from "@/hooks/useLayoutInit"
import { useSettings } from "@/hooks/useSettings"


const LayoutWrapper = props => {

    const { systemMode, verticalLayout } = props

    const { settings } = useSettings()

    // set mode, dark or light
    useLayoutInit(systemMode)

    return (
        <div className='flex flex-col flex-auto' >
            {verticalLayout}
        </div>
    )
}

export default LayoutWrapper