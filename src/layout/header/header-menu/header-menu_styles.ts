import styled, { css } from 'styled-components'
import { theme } from '@/styles/theme'
import { Link } from 'react-scroll'
import { variables } from '@/styles/common'

const Nav = styled.nav`
  @media ${theme.media.tablet} {
    display: none;
  }
`

const MobileNav = styled.nav`
  width: 100%;
  height: ${variables.headerHeightMobile};
  position: relative;

  @media ${theme.media.tablet} {
    display: block;
  }
`

const MenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: rgba(12, 7, 10, 0.95);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
  transition: ${theme.animations.transitions};
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(0);
      transition: 0.5s ease-in-out;
    `}
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: ${variables.headerHeightDesktop};
    
  @media ${theme.media.tablet} {  
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: ${variables.headerHeightDesktop};
  color: ${theme.colors.accent};
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  transition: ${theme.animations.transitions};
  cursor: pointer;
  
  &:hover,
  &.active {
    color: ${theme.colors.font};
  }
    
  @media ${theme.media.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${variables.headerHeightMobile};
  }
`

export const S = { Nav, NavList, MobileNav, MenuPopup, NavLink }
