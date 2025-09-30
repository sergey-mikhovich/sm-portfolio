import styled from 'styled-components'
import { SectionText } from '@/components'
import { theme } from '@/styles/theme'

const AboutMe = styled.section`

`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
  align-items: center;

  ${SectionText} {

  }
  @media ${theme.media.tablet} {
    grid-template-columns: 2fr 1fr;
  }
  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
    ${SectionText} {
      text-align: center;
    }
  }
`
const Photo = styled.img`
  width: 100%;
  height: calc(100% - 40px);
  border-radius: 24px;
  box-shadow: ${theme.shadow.main};
  object-fit: cover;
  object-position: top;
  @media ${theme.media.mobile} {
    display: none;
  }
`

export const S = { AboutMe, Wrapper, Photo }
