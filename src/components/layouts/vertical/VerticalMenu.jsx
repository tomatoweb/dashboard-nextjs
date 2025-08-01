'use client'

// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@/menu/vertical-menu'
import CustomChip from '@/components/mui/Chip'

// import { GenerateVerticalMenu } from '@components/GenerateMenu'
// Hook Imports
import { useSettings } from '@/hooks/useSettings'
import useVerticalNav from '@/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@/components/layouts/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@/components/layouts/styles/vertical/menuItemStyles'
import menuSectionStyles from '@/components/layouts/styles/vertical/menuSectionStyles'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ dictionary, scrollMenu }) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const { settings } = useSettings()
  const params = useParams()
  const { isBreakpointReached } = useVerticalNav()
  
  // Vars
  const { transitionDuration } = verticalNavOptions
  const { lang: locale, id } = params
  const ScrollWrapper = PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme, settings)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <SubMenu
          label={dictionary['navigation'].dashboards}
          icon={<i className='tabler-smart-home' />}
          suffix={<CustomChip label='3' size='small' color='error' round='true' />}
        >
          <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].crm}</MenuItem>
          <MenuItem href={`/dashboards/analytics`}>{dictionary['navigation'].analytics}</MenuItem>
          <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].eCommerce}</MenuItem>
        </SubMenu>
        <MenuSection label={dictionary['navigation'].appsPages}>
				<SubMenu label={dictionary['navigation'].pages} icon={<i className='tabler-file' />}>

            <MenuItem href={`/clientserver`}>{dictionary['navigation'].childrenPattern}</MenuItem>

            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].accountSettings}</MenuItem>
            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].faq}</MenuItem>
            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].pricing}</MenuItem>
            <SubMenu label={dictionary['navigation'].miscellaneous}>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].comingSoon}
              </MenuItem>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].underMaintenance}
              </MenuItem>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].pageNotFound404}
              </MenuItem>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].notAuthorized401}
              </MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem className="notallowed" icon={<i className='tabler-calendar' />}>
            {dictionary['navigation'].calendar}
          </MenuItem>
          <SubMenu label={dictionary['navigation'].invoice} icon={<i className='tabler-file-description' />}>
            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].list}</MenuItem>
            <MenuItem className="notallowed" href={`#`}>
              {dictionary['navigation'].preview}
            </MenuItem>
            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].edit}</MenuItem>
            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].add}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].user} icon={<i className='tabler-user' />}>
            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].list}</MenuItem>
            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].view}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].rolesPermissions} icon={<i className='tabler-lock' />}>
            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].roles}</MenuItem>
            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].permissions}</MenuItem>
          </SubMenu>          
          <SubMenu label={dictionary['navigation'].authPages} icon={<i className='tabler-shield-lock' />}>
            <SubMenu label={dictionary['navigation'].login}>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].loginV1}
              </MenuItem>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].loginV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].register}>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].registerV1}
              </MenuItem>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].registerV2}
              </MenuItem>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].registerMultiSteps}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].verifyEmail}>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].verifyEmailV1}
              </MenuItem>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].verifyEmailV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].forgotPassword}>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].forgotPasswordV1}
              </MenuItem>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].forgotPasswordV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].resetPassword}>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].resetPasswordV1}
              </MenuItem>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].resetPasswordV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].twoSteps}>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].twoStepsV1}
              </MenuItem>
              <MenuItem className="notallowed" href={`#`}>
                {dictionary['navigation'].twoStepsV2}
              </MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].wizardExamples} icon={<i className='tabler-dots' />}>
            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].checkout}</MenuItem>
            <MenuItem className="notallowed" href={`#`}>
              {dictionary['navigation'].propertyListing}
            </MenuItem>
            <MenuItem className="notallowed" href={`#`}>
              {dictionary['navigation'].createDeal}
            </MenuItem>
          </SubMenu>
          <MenuItem className="notallowed" href={`#`} icon={<i className='tabler-square' />}>
            {dictionary['navigation'].dialogExamples}
          </MenuItem>
          <SubMenu label={dictionary['navigation'].widgetExamples} icon={<i className='tabler-chart-bar' />}>
            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].basic}</MenuItem>
            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].advanced}</MenuItem>
            <MenuItem className="notallowed" href={`#`}>
              {dictionary['navigation'].statistics}
            </MenuItem>
            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].charts}</MenuItem>
            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].actions}</MenuItem>
          </SubMenu>
        </MenuSection>
        <MenuSection label={dictionary['navigation'].formsAndTables}>
          <MenuItem className="notallowed" href={`#`} icon={<i className='tabler-layout' />}>
            {dictionary['navigation'].formLayouts}
          </MenuItem>
          <MenuItem className="notallowed" href={`#`} icon={<i className='tabler-checkup-list' />}>
            {dictionary['navigation'].formValidation}
          </MenuItem>
          <MenuItem className="notallowed" href={`#`} icon={<i className='tabler-git-merge' />}>
            {dictionary['navigation'].formWizard}
          </MenuItem>
          <MenuItem className="notallowed" href={`#`} icon={<i className='tabler-table' />}>
            {dictionary['navigation'].reactTable}
          </MenuItem>
          <MenuItem icon={<i className='tabler-checkbox' />} className="notallowed" href={`#`} suffix={<i className='tabler-external-link text-xl' />}>
            {dictionary['navigation'].formELements}
          </MenuItem>
          <MenuItem
            icon={<i className='tabler-layout-board-split' />}
            className="notallowed" href={`#`}
            suffix={<i className='tabler-external-link text-xl' />}           
          >
            {dictionary['navigation'].muiTables}
          </MenuItem>
        </MenuSection>
        <MenuSection label={dictionary['navigation'].chartsMisc}>
          <SubMenu label={dictionary['navigation'].charts} icon={<i className='tabler-chart-donut-2' />}>
            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].apex}</MenuItem>
            <MenuItem className="notallowed" href={`#`}>{dictionary['navigation'].recharts}</MenuItem>
          </SubMenu>
          <MenuItem
            icon={<i className='tabler-cards' />}
            className="notallowed" href={`#`}
            suffix={<i className='tabler-external-link text-xl' />}           
          >
            {dictionary['navigation'].foundation}
          </MenuItem>
          <MenuItem
            icon={<i className='tabler-atom' />}
            className="notallowed" href={`#`}
            suffix={<i className='tabler-external-link text-xl' />}           
          >
            {dictionary['navigation'].components}
          </MenuItem>
          <MenuItem
            icon={<i className='tabler-list-search' />}
            className="notallowed" href={`#`}
            suffix={<i className='tabler-external-link text-xl' />}           
          >
            {dictionary['navigation'].menuExamples}
          </MenuItem>
          <MenuItem className="notallowed" 
            icon={<i className='tabler-lifebuoy' />}
            suffix={<i className='tabler-external-link text-xl' />}           
            href='#'
          >
            {dictionary['navigation'].raiseSupport}
          </MenuItem>
          <MenuItem
						className="notallowed" 
            icon={<i className='tabler-book-2' />}
            suffix={<i className='tabler-external-link text-xl' />}           
            href='#'
          >
            {dictionary['navigation'].documentation}
          </MenuItem>
          <SubMenu label={dictionary['navigation'].others} icon={<i className='tabler-box' />}>
            <MenuItem className="notallowed"  suffix={<CustomChip label='New' size='small' color='info' round='true' />}>
              {dictionary['navigation'].itemWithBadge}
            </MenuItem>
            <MenuItem
							className="notallowed" 
              href='#'             
              suffix={<i className='tabler-external-link text-xl' />}
            >
              {dictionary['navigation'].externalLink}
            </MenuItem>
            <SubMenu label={dictionary['navigation'].menuLevels}>
              <MenuItem>{dictionary['navigation'].menuLevel2}</MenuItem>
              <SubMenu label={dictionary['navigation'].menuLevel2}>
                <MenuItem>{dictionary['navigation'].menuLevel3}</MenuItem>
                <MenuItem>{dictionary['navigation'].menuLevel3}</MenuItem>
              </SubMenu>
            </SubMenu>
            <MenuItem disabled>{dictionary['navigation'].disabledMenu}</MenuItem>
          </SubMenu>
        </MenuSection>
      </Menu>
      {/* <Menu
          popoutMenuOffset={{ mainAxis: 23 }}
          menuItemStyles={menuItemStyles(verticalNavOptions, theme, settings)}
          renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
          renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
          menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
        >
          <GenerateVerticalMenu menuData={menuData(dictionary, params)} />
        </Menu> */}
    </ScrollWrapper>
  )
}

export default VerticalMenu
