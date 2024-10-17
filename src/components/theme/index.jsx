'use client'

import defaultTheme from '@/theme'
import { deepmerge } from '@mui/utils'
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme,
    lighten,
    darken
} from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import { useMemo } from 'react'
import { useMedia } from 'react-use'
import { useSettings } from '@/hooks/useSettings'
import themeConfig from '@/configs/themeConfig'
import ModeChanger from './ModeChanger'

const ThemeProvider = props => {    

    const { children, systemMode } = props
    const { settings } = useSettings()
    const isDark = useMedia('(prefers-color-scheme: dark)', false)
    const isServer = typeof window === 'undefined'

    let currentMode

    if (isServer) {
        currentMode = systemMode
    } else {
        if (settings.mode === 'system') {
        currentMode = isDark ? 'dark' : 'light'
        } else {
        currentMode = settings.mode
        }
    }

     /* cache the result of the theme calculation between re-renders. */ 
    const theme = useMemo( () => {
        const newColorScheme = {
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: settings.primaryColor,
                            light: lighten(settings.primaryColor, 0.2),
                            dark: darken(settings.primaryColor, 0.1)
                        }
                    }
                },
                dark: {
                    palette: {
                        primary: {
                            main: settings.primaryColor,
                            light: settings.primaryColor,
                            dark: darken(settings.primaryColor, 0.1)
                        }
                    }
                }
            }
        }
        const coreTheme = deepmerge(defaultTheme(systemMode), newColorScheme)

        /* MUI experimental_extendTheme is an API that extends the default theme. 
        It returns a theme that can only be used by the Experimental_CssVarsProvider. */
        // https://mui.com/material-ui/experimental-api/css-theme-variables/customization/#theming        
        const extendedTheme = extendTheme(coreTheme)
        
        return extendedTheme

    }, [settings.primaryColor, settings.skin, currentMode] )
    
    // Important Please read: https://mui.com/material-ui/integrations/nextjs/ 
    return (
        <AppRouterCacheProvider>
            <CssVarsProvider 
                theme={theme} 
                defaultMode={systemMode}
                modeStorageKey={`${themeConfig.templateName.toLowerCase().split(' ').join('-')}-mui-template-mode`}    
            >
                <>
                    <ModeChanger />
                    <CssBaseline />
                    {children}
                </>
            </CssVarsProvider>
        </AppRouterCacheProvider>
    )
}

export default ThemeProvider