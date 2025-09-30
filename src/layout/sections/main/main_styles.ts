import styled from 'styled-components'
import { theme } from '@/styles/theme'
import { font } from '@/styles/common'
import { Button } from '@/components'
import { Link } from 'react-scroll'

const Main = styled.section`
  height: 100%;
  max-height: 100vh;
  
  @media ${theme.media.tablet} {
      max-height: unset;
  }
`

const TopSpacer = styled.div`
  height: 100px;
    
  @media ${theme.media.tablet} {
      height: 60px;
  }
`

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3fr 2fr;
  column-gap: 50px;
  height: 100%;
  max-height: calc(100vh - 100px);
  padding: 30px 0;
    
  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    row-gap: 40px;
    max-height: unset;
    justify-items: center;
  }
`
const PhotoWrapper = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  @media ${theme.media.tablet} {
    grid-row-start: 2;
    grid-row-end: 3;
  }
`
const Photo = styled.img`
  height: 100%;
  width: calc(100% - 40px);
  object-fit: cover;
  object-position: top;
  border-radius: 25px;
  box-shadow: ${theme.shadow.main};
    
  @media ${theme.media.tablet} {
      max-width: 480px;
      width: 100%;
  }
`

const Name = styled.h2`
  ${font({ color: theme.colors.accent, weight: 800, max: 50, min: 34 })};
`

const MainTitle = styled.h1`
  ${font({ weight: 700, max: 38, min: 25 })};
  padding-top: 30px;
  p {
    display: none;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 20px;
  width: 100%;
    
  ${Button} {
    padding: 0;
    min-height: 60px;
    width: 100%;
    flex: 1;
    cursor: pointer;
    &:last-child {
      background-color: ${theme.colors.primaryBg};
    }
  }

  @media ${theme.media.tablet} {
    flex-direction: column;
    align-items: center;
    padding-top: 0;
      
    ${Button} {
      max-width: 480px;
    }
  }
`

const ButtonText = styled.p`
    white-space: nowrap;
`

const InfoWrapper = styled.div`
  display: grid;
  align-content: center;
  @media ${theme.media.tablet} {
    grid-row-start: 1;
    grid-row-end: 2;
  }
`

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 12px 26px;
`

const RegularLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 12px 26px;
`

export const S = { Main, TopSpacer, MainWrapper, Photo, InfoWrapper, Name, MainTitle, ButtonWrapper, ButtonText, PhotoWrapper, NavLink, RegularLink }
