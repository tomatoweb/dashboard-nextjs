import 'server-only'

// Next Imports
import { cookies, headers } from 'next/headers'

// Config Imports
import demoConfigs from '@/configs/demoConfigs'
import themeConfig from '@/configs/themeConfig'

export const getDemoName = () => {
  const headersList = headers()

  return headersList.get('X-server-header')
}

export const getSettingsFromCookie = () => {
  const cookieStore = cookies()
  const demoName = getDemoName()

  const cookieName = demoName
    ? themeConfig.settingsCookieName.replace('demo-1', demoName)
    : themeConfig.settingsCookieName
    
  return JSON.parse(cookieStore.get(cookieName)?.value || '{}')
}

// 'sytem' or 'dark' or 'light'
export const getMode = () => {
  const settingsCookie = getSettingsFromCookie()
  const demoName = getDemoName()

  // Get mode from header cookie or fallback to demo or theme config
  const _mode = settingsCookie.mode || (demoName && demoConfigs[demoName].mode) || themeConfig.mode

  return _mode
}

export const getSystemMode = () => {
  const cookieStore = cookies()
  const colorPrefCookie = cookieStore.get('colorPref')?.value || 'light'
  const mode = getMode()
  

  return (mode === 'system' ? colorPrefCookie : mode) || 'light'
}

export const getServerMode = () => {
  const mode = getMode()
  const systemMode = getSystemMode()

  return mode === 'system' ? systemMode : mode
}

export const getSkin = () => {
  const settingsCookie = getSettingsFromCookie()

  return settingsCookie.skin || 'default'
}
