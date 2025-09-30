import styled from 'styled-components'
import { SocialIcons } from './social-icons'
import { ContactsForm, Container, FlexWrapper, SectionText, SectionTitle } from '@/components'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

const icons = [
  { url: 'https://www.linkedin.com/in/sergey-mikhovich/', id: 'linkedin' },
  { url: 'https://t.me/clmsbrr', id: 'telegram' },
  { url: 'mailto:sergey.mikhw@gmail.com', id: 'email' },
  { url: 'https://github.com/sergey-mikhovich', id: 'github' },
]

export const Contacts = () => {
  const { t } = useTranslation()
  return (
    <StyledContacts id={'contacts'}>
      <Container>
        <SectionTitle>{t('title', { ns: 'contacts' })}</SectionTitle>

        <Fade>
          <FlexWrapper gap={'40px'} justify={'center'} direction={'column'}>
            <SectionText>{t('description', { ns: 'contacts' })}</SectionText>
            <SocialIcons icons={icons} />
            <ContactsForm />
          </FlexWrapper>
        </Fade>
      </Container>
    </StyledContacts>
  )
}

const StyledContacts = styled.section`

`
