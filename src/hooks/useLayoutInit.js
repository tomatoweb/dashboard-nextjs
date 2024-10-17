'use client'


import { useEffect } from 'react'
import { useCookie, useMedia } from 'react-use'
import { useColorScheme } from '@mui/material'
import { useSettings } from './useSettings'

// import { useSettings } from '@/hooks/useSettings'

// initialize color preference cookie and settings context on first load
const useLayoutInit = colorSchemeFallback => {
    
    // Hooks
    const { settings } = useSettings()
   
    const { mode, setMode } = useColorScheme()

    const [_, updateCookieColorPref] = useCookie('colorPref')
    
    // get mode from  Windows system and/or browser media query
    // Windows system setting is prioritair of browser setting      
    const isDark = useMedia('(prefers-color-scheme: dark)', colorSchemeFallback === 'dark')
    
    useEffect(() => {
        const appMode = isDark ? 'dark' : 'light'
        
        updateCookieColorPref(appMode)

        if (settings.mode === 'system') {

            // We need to change the mode in settings context to apply the mode change to MUI components
            setMode(appMode)

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDark])

    // This hook does not return anything as it is only used to initialize color preference cookie and settings context on first load
}

export default useLayoutInit
