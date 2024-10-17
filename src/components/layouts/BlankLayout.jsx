'use client'

import useLayoutInit from '@/hooks/useLayoutInit'

const BlankLayout = props => {
  
    const { children, systemMode } = props    
    
    useLayoutInit(systemMode)
  
    return (
        <div className='ts-blank-layout is-full bs-full'>{children}</div>
    )
}

export default BlankLayout