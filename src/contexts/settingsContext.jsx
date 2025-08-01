'use client'
import { createContext, useMemo, useState } from 'react'

// Config Imports
import demoConfigs from '@/configs/demoConfigs'
import primaryColorConfig from '@/configs/primaryColorConfig'
import themeConfig from '@/configs/themeConfig'

// Hook Imports
import { useObjectCookie } from '@/hooks/useObjectCookie'

// Initial Settings Context
export const SettingsContext = createContext(null)


// Settings Provider
export const SettingsProvider = props => {

    const demoName = props.demoName || 'demo-1'

    const demoConfigurations = demoName ? demoConfigs[demoName] : {}

    // Initial Settings
    const initialSettings = {
        mode: themeConfig.mode, // system, dark, light
        skin: themeConfig.skin, // 'default', 'bordered'
        semiDark: themeConfig.semiDark,
        layout: themeConfig.layout,
        navbarContentWidth: themeConfig.navbar.contentWidth,
        contentWidth: themeConfig.contentWidth,
        footerContentWidth: themeConfig.footer.contentWidth,
        primaryColor: primaryColorConfig[0].main,  // 0 violet, 1 green, 2 orange, 4 rouge, 5 bleu (primary main color from primaryColorConfig.js)
        ...demoConfigurations
    }

    const updatedInitialSettings = {
        ...initialSettings,
        mode: props.mode || (demoName && demoConfigurations.mode) || themeConfig.mode
    }

    const [settingsCookie, updateSettingsCookie] = useObjectCookie(
        demoName ? themeConfig.settingsCookieName.replace('demo-1', demoName) : themeConfig.settingsCookieName,
        JSON.stringify(props.settingsCookie) !== '{}' ? props.settingsCookie : updatedInitialSettings
    )

    const [_settingsState, _updateSettingsState] = useState(

        // if cookie value is not empty
        JSON.stringify(settingsCookie) !== '{}' ? settingsCookie : updatedInitialSettings
    )

    const updateSettings = (settings, options) => {

        const { updateCookie = true } = options || {}

        _updateSettingsState(prev => {
            const newSettings = { ...prev, ...settings }

            // Update cookie if needed
            if (updateCookie) updateSettingsCookie(newSettings)

            return newSettings
        })
    }

    const isSettingsChanged = useMemo(
        () => JSON.stringify(initialSettings) !== JSON.stringify(_settingsState),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [_settingsState]
    )

    const resetSettings = () => {
        updateSettings(initialSettings)
    }

    /**
     * Updates the settings for page with the provided settings object.
     * Updated settings won't be saved to cookie hence will be reverted once navigating away from the page.
     *
     * @param settings - The partial settings object containing the properties to update.
     * @returns A function to reset the page settings.
     *
     * @example
     * useEffect(() => {
     *     return updatePageSettings({ theme: 'dark' });
     * }, []);
     */
    const updatePageSettings = settings => {
        updateSettings(settings, { updateCookie: false })

        // Returns a function to reset the page settings
        return () => updateSettings(settingsCookie, { updateCookie: false })
    }

    return (
        <SettingsContext.Provider
            value={{
                settings: _settingsState,
                updateSettings,
                isSettingsChanged,
                resetSettings,
                updatePageSettings
            }}
        >
            {props.children}
        </SettingsContext.Provider>
    )
}
