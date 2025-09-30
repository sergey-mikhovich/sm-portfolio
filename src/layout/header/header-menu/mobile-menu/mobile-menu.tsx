import { useState } from 'react'
import { Menu, type MenuItem } from '@/layout'

import { S } from '../header-menu_styles'
import { BurgerButton } from '@/components'
import { variables } from '@/styles/common'

type Props = {
  menuItems: MenuItem[]
}
export const MobileMenu = ({ menuItems }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const openMenuHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.MobileNav>
      <BurgerButton onClick={openMenuHandler} isOpen={isOpen}>
        <span></span>
      </BurgerButton>
      <S.MenuPopup isOpen={isOpen} onClick={openMenuHandler}>
        <Menu menuItems={menuItems} onItemClick={openMenuHandler} offset={-parseInt(variables.headerHeightMobile)}/>
      </S.MenuPopup>
    </S.MobileNav>
  )
}
