// Third-party Imports
import styled from '@emotion/styled'

// Util Imports
import { menuClasses } from '@/menu/utils/menuClasses'

const StyledHorizontalMenu = styled.nav`
  &.${menuClasses.root} {
    ${({ rootStyles }) => rootStyles}
  }
`

export default StyledHorizontalMenu
