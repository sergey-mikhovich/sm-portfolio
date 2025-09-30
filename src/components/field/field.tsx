import styled from 'styled-components'
import { theme } from '@/styles/theme'
import { font } from '@/styles/common'

type Props = {
  label: string
  placeholder?: string
  name: string
  type?: 'email' | 'text'
}

export const Field = ({ label, placeholder, name, type = 'text' }: Props) => {
  return (
    <FieldWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledField type={type} name={name} required id={name} placeholder={placeholder} />
    </FieldWrapper>
  )
}

const StyledField = styled.input`
  box-sizing: border-box;
  border: 2px solid ${theme.colors.secondary};
  background-color: ${theme.colors.secondaryBg};
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  height: 50px;

  &:hover,
  &:active {
    background-color: ${theme.colors.primaryBg};

    transition: ${theme.animations.transitions};
  }
`

const StyledLabel = styled.label`
    opacity: 0.6;
    ${font({ max: 14, min: 12 })};
`

const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
