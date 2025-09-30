import styled from 'styled-components'
import { theme } from '@/styles/theme'

const IconsList = styled.ul`
  display: flex;
  gap: 50px;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
  @media ${theme.media.mobile} {
    padding-bottom: 30px;
  }
`
const Icon = styled.li`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.1);
    transition: ${theme.animations.transitions};
  }
`

const Link = styled.a`
  color: ${theme.colors.accent};

  &:hover {
    color: ${theme.colors.font};
    transition: ${theme.animations.transitions};
  }
`
export const S = { Icon, IconsList, Link }
