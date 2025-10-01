import { Project } from './project'
import styled from 'styled-components'
import fullstackPizza from '@/assets/portfolio/fullstack_pizza.webp'
import portfolio from '@/assets/portfolio/portfolio.webp'
import { Container, FlexWrapper, SectionTitle } from '@/components'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

export const Portfolio = () => {
  const { t } = useTranslation()

  const projects = [
    {
      name: t('nameFullstackPizza', { ns: 'portfolio' }),
      demo: 'https://fullstack-pizza-tau.vercel.app/',
      code: 'https://github.com/sergey-mikhovich/FullstackPizza',
      photo: fullstackPizza,
      description: `${t('descriptionFullstackPizza', { ns: 'portfolio' })}`,
    },
    {
      name: t('namePortfolio', { ns: 'portfolio' }),
      demo: 'https://sm-portfolio-alpha.vercel.app/',
      code: 'https://github.com/sergey-mikhovich/sm-portfolio',
      photo: portfolio,
      description: `${t('descriptionPortfolio', { ns: 'portfolio' })}`,
    },
  ]

  return (
    <StyledPortfolio id={'portfolio'}>
      <Container>
        <SectionTitle>{t('title', { ns: 'portfolio' })}</SectionTitle>
        <Fade>
          <FlexWrapper wrap={'wrap'} justify={'center'} gap={'30px'} align={'stretch'}>
            {projects.map((project) => (
              <Project
                name={project.name}
                key={project.name}
                description={project.description}
                demo={project.demo}
                code={project.code}
                photo={project.photo}
              />
            ))}
          </FlexWrapper>
        </Fade>
      </Container>
    </StyledPortfolio>
  )
}

const StyledPortfolio = styled.section`

`
