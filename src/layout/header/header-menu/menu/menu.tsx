import { type MenuItem } from '@/layout'

import { S } from '../header-menu_styles'

type Props = {
  menuItems: MenuItem[]
  onItemClick?: () => void
  offset?: number
}

export const Menu = ({ menuItems, onItemClick, offset }: Props) => {
  return (
    <S.NavList>
      {menuItems.map((item) => (
        <li key={item.title}>
          <S.NavLink
            to={`${item.href}`}
            smooth={true}
            activeClass="active"
            spy={true}
            offset={offset}
            onClick={onItemClick}
          >
            {item.title}
          </S.NavLink>
        </li>
      ))}
    </S.NavList>
  )
}
