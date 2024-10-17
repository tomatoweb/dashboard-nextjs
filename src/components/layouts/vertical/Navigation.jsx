'use client'

// React Imports
import { useEffect, useRef } from 'react'

// MUI Imports
import { styled, useColorScheme, useTheme } from '@mui/material/styles'
import Styled from '@emotion/styled'

// Component Imports
import VerticalNav, { NavHeader, NavCollapseIcons } from '@/menu/vertical-menu'
import VerticalMenu from './VerticalMenu'

// Hook Imports
import useVerticalNav from '@/hooks/useVerticalNav'
import { useSettings } from '@/hooks/useSettings'

// Style Imports
import navigationCustomStyles from '@/components/layouts/styles/vertical/navigationCustomStyles'
import themeConfig from '@/configs/themeConfig'
import Logo from '@/components/svg/Logo'

const StyledBoxForShadow = styled('div')(({ theme }) => ({
  top: 60,
  left: -8,
  zIndex: 2,
  opacity: 0,
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  height: theme.mixins.toolbar.minHeight,
  transition: 'opacity .15s ease-in-out',
  background: `linear-gradient(var(--mui-palette-background-paper) ${theme.direction === 'rtl' ? '95%' : '5%'}, rgb(var(--mui-palette-background-paperChannel) / 0.85) 30%, rgb(var(--mui-palette-background-paperChannel) / 0.5) 65%, rgb(var(--mui-palette-background-paperChannel) / 0.3) 75%, transparent)`,
  '&.scrolled': {
    opacity: 1
  }
}))
const transitionDuration = 300
const LogoText = Styled.span`
  font-size: 1.375rem;
  line-height: 1.09091;
  font-weight: 700;
  letter-spacing: 0.25px;
  color: var(--mui-palette-text-primary);
  transition: ${({ transitionDuration }) =>
    `margin-inline-start ${transitionDuration}ms ease-in-out`};

  ${({ isHovered, isCollapsed }) =>
    isCollapsed && !isHovered ? 'opacity: 0; margin-inline-start: 0;' : 'opacity: 1; margin-inline-start: 1px;'}
`

const Navigation = props => {
  // Props
  const { dictionary, mode, systemMode } = props

  // Hooks
  const verticalNavOptions = useVerticalNav()
  const { updateSettings, settings } = useSettings()
  const { mode: muiMode, systemMode: muiSystemMode } = useColorScheme()
  
  const theme = useTheme()

  // Vars
  const { layout } = settings

  // Refs
  const shadowRef = useRef(null)
  const logoTextRef = useRef(null)

  // Vars
  const { isCollapsed, isHovered, collapseVerticalNav, isBreakpointReached } = verticalNavOptions
  const isServer = typeof window === 'undefined'
  const isSemiDark = settings.semiDark
  let isDark

  if (isServer) {
    isDark = mode === 'system' ? systemMode === 'dark' : mode === 'dark'
  } else {
    isDark = muiMode === 'system' ? muiSystemMode === 'dark' : muiMode === 'dark'
  }

  const scrollMenu = (container, isPerfectScrollbar) => {
    container = isBreakpointReached || !isPerfectScrollbar ? container.target : container

    if (shadowRef && container.scrollTop > 0) {
      // @ts-ignore
      if (!shadowRef.current.classList.contains('scrolled')) {
        // @ts-ignore
        shadowRef.current.classList.add('scrolled')
      }
    } else {
      // @ts-ignore
      shadowRef.current.classList.remove('scrolled')
    }
  }

  useEffect(() => {
    if (settings.layout === 'collapsed') {
      collapseVerticalNav(true)
    } else {
      collapseVerticalNav(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.layout])

  return (
    // eslint-disable-next-line lines-around-comment
    // Sidebar Vertical Menu
    <VerticalNav
      customStyles={navigationCustomStyles(verticalNavOptions, theme)}
      collapsedWidth={71}
      backgroundColor='var(--mui-palette-background-paper)'
      // eslint-disable-next-line lines-around-comment
      // The following condition adds the data-mui-color-scheme='dark' attribute to the VerticalNav component
      // when semiDark is enabled and the mode or systemMode is light
      {...(isSemiDark &&
        !isDark && {
          'data-mui-color-scheme': 'dark'
        })}
    >
      {/* Nav Header including Logo & nav toggle icons  */}
      <NavHeader>
        <Logo/>
        <LogoText
           ref={logoTextRef}
           isHovered={isHovered}
           isCollapsed={layout === 'collapsed'}
           transitionDuration={transitionDuration}
        >
        {themeConfig.templateName}
        </LogoText>
        {!(isCollapsed && !isHovered) && (
          <NavCollapseIcons
            lockedIcon={<i className='tabler-toggle-left text-xxl' />}
            unlockedIcon={<i className='tabler-toggle-left-filled text-xxl' />}
            closeIcon={<i className='tabler-x text-xl' />}
            onClick={() => updateSettings({ layout: !isCollapsed ? 'collapsed' : 'vertical' })}
          />
        )}
      </NavHeader>
      <StyledBoxForShadow ref={shadowRef} />
      <VerticalMenu dictionary={dictionary} scrollMenu={scrollMenu} />
    </VerticalNav>
  )
}

export default Navigation
