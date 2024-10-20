// Third-party Imports
import styled from '@emotion/styled'

// Util Imports
import { menuClasses } from '@/menu/utils/menuClasses'

// Style Imports
import { menuButtonStyles } from '@/menu/vertical-menu/MenuButton'

const StyledVerticalMenuItem = styled.li`
  position: relative;
  margin-block-start: 4px;
  ${({ menuItemStyles }) => menuItemStyles};
  ${({ rootStyles }) => rootStyles};

  > .${menuClasses.button} {
    ${({ level, disabled, isCollapsed, isPopoutWhenCollapsed }) =>
      menuButtonStyles({
        level,
        disabled,
        isCollapsed,
        isPopoutWhenCollapsed
      })};
    ${({ buttonStyles }) => buttonStyles};
  }
`

export default StyledVerticalMenuItem
