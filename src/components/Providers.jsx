import { NextAuthProvider } from '@/contexts/nextAuthProvider'
import ThemeProvider from '@/components/theme'
import { getMode, getDemoName, getSettingsFromCookie, getSystemMode } from '@/utils/serverHelpers'
import { SettingsProvider } from '@/contexts/settingsContext'
import { VerticalNavProvider } from '@/contexts/verticalNavContext'

const Providers = props => {

    const { children } = props

    
    const settingsCookie = getSettingsFromCookie()
    const demoName = getDemoName()
    const mode = getMode()    
    const systemMode = getSystemMode()
    
    return (    
        <NextAuthProvider basePath={process.env.NEXTAUTH_BASEPATH}>
            <VerticalNavProvider>    
                <SettingsProvider settingsCookie={settingsCookie} mode={mode} demoName={demoName}>
                    <ThemeProvider systemMode={systemMode}>
                    {children}
                    </ThemeProvider>
                </SettingsProvider>
            </VerticalNavProvider>
        </NextAuthProvider>
    )
}

export default Providers