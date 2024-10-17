import { i18n } from "@/configs/i18n"

// Check if the url is missing the locale
const isUrlMissingLocale = url => {
    return i18n.locales.every(locale => !(url.startsWith(`/${locale}/`) || url === `/${locale}`))
  }


const getLocalizedUrl = ( url, lang = 'en') => {

    if (!url || !lang ) throw new Error('URL or language code cannot be empty')

    return ( lang + url )
}

export { isUrlMissingLocale, getLocalizedUrl }