import { Menu, type MenuItem } from '@/layout'
import { S } from '../header-menu_styles'
import { variables } from '@/styles/common'

type Props = {
  menuItems: MenuItem[]
}

export const DesktopMenu = ({ menuItems }: Props) => {
  return (
    <S.Nav>
      <Menu menuItems={menuItems} offset={-parseInt(variables.headerHeightDesktop)}/>
    </S.Nav>
  )
}
