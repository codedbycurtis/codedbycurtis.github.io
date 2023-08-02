import React from 'react'
import { styled } from 'styled-components'
import NotFound from '../images/void.svg'
import PageContainer from '../components/PageContainer'
import StyledLink from '../components/StyledLink'

const HeroContainer = styled.div`
  text-align: center;

  & img {
    width: 50%;
  }

  & h1 {
    margin: 1rem 0;
    font-size: 3rem;
  }
`

const InlineStyledLink = styled(StyledLink)`
  display: inline-block;
  color: gray;
  text-decoration: none;
  transition: color 250ms;

  &:hover {
    color: crimson;
  }
`

const NotFoundPage = () => {
  return (
    <PageContainer>
      <HeroContainer>
        <img src={NotFound} alt='' />
        <h1>404 &mdash; Page not found</h1>
        <p style={{ color: 'lightgray' }}>"And if you gaze long enough into an abyss, the abyss will gaze back into you."</p>
        <p>How about you <InlineStyledLink to='/'>return home</InlineStyledLink> instead?</p>
      </HeroContainer>
    </PageContainer>
  )
}

export default NotFoundPage

export const Head = () => <title>Page not found</title>
