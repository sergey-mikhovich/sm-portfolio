import styled from 'styled-components'
import { theme } from '@/styles/theme'

const Header = styled.header`
  position: fixed;
  width: 100%;
  background-color: rgba(12, 7, 10, 0.7);
  z-index: 9999;

  @media ${theme.media.tablet} {
    border-bottom: none;
  }
`

export const S = {
  Header,
}
