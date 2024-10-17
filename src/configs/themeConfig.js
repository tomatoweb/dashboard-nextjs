/*
    This is the default theme config

    the 8 settings are those 7 themeConfig props plus the primaryColor (primaryColorConfig[0].main) : 
    1. mode
    2. skin
    3. semiDark
    4. layout
    5. navbar.contentWidth
    6. contentWidth
    7. footer.contentWidth
    + primaryColor ( violet, red, green, orange, blue)

    they are managed by the settingscontext
    they are provided by the settingsProvider ( settingsContext.jsx )
    they are callable via the hook useSettings.js
*/

const themeConfig = {
    templateName: 'Dotdev',
    settingsCookieName: 'dotdev-mui-next', // name of the cookie containing the settings (mode, skin, semidark, layout, navbarContentWidth, contentWidth, footerContentWidth, primaryColor)
    mode: 'system', // 'system', 'light', 'dark'
    skin: 'default', // 'default', 'bordered'
    semiDark: false, // true, false
    layout: 'vertical', // 'vertical', 'collapsed', 'horizontal'
    layoutPadding: 24, // Common padding for header, content, footer layout components (in px)
    compactContentWidth: 1440, // in px
    navbar: {
      type: 'fixed', // 'fixed', 'static'
      contentWidth: 'compact', // 'compact', 'wide'
      floating: true, //! true, false (This will not work in the Horizontal Layout)
      detached: true, //! true, false (This will not work in the Horizontal Layout or floating navbar is enabled)
      blur: true // true, false
    },
    contentWidth: 'compact', // 'compact', 'wide'
    footer: {
      type: 'static', // 'fixed', 'static'
      contentWidth: 'compact', // 'compact', 'wide'
      detached: true //! true, false (This will not work in the Horizontal Layout)
    },
    disableRipple: false, // true, false
    toastPosition: 'top-right' // 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'
  }
  
  export default themeConfig
  