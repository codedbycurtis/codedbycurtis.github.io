import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { styled } from 'styled-components'
import { FaDownload, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import Seo from '../components/Seo'
import PageContainer from '../components/PageContainer'
import Cv from '../files/CV.pdf'

const StyledPageContainer = styled(PageContainer)`
    background-color: crimson;
`

const HeroContainer = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto;
    row-gap: 0;

    @media screen and (min-width: 768px) {
        grid-template-rows: auto;
        grid-template-columns: 40% 60%;
        max-width: 1200px;
    }
`

const HeroMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 1rem;
    padding: 0 1rem;
`

const HeroText = styled.div`
    text-align: center;

    & h1 {
        margin: 0;
        font-family: 'Rock Salt', cursive;
    }

    & p {
        margin: 0;
    }

    @media screen and (min-width: 768px) {
        text-align: left;
    }
`

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 600px) {
        flex-direction: row;
        align-items: start;
    }
`

const DownloadButton = styled.button`
    border: 3px solid maroon;
    border-right: none;
    border-radius: 1.5rem;
    padding: 0.5rem 0;
    background-color: transparent;
    color: white;
    font-size: 1rem;
    cursor: pointer;

    &:hover, &:hover i {
        border-color: white;
    }

    & span {
        padding: 0 0.75rem;
    }

    & i {
        border: 3px solid maroon;
        border-radius: 1.5rem;
        padding: 0.5rem 0.75rem;
    }
`

const SocialLinks = styled.div`
    display: flex;
    column-gap: 2rem;
`

const FontAwesomeIcon = styled.a`
    font-size: 2.5rem;
    text-decoration: none;
    color: maroon;

    &:hover {
        color: white;
    }
`

const IndexPage = () => {
    const downloadCv = () => {
        const anchor = document.createElement('a')
        anchor.href = Cv
        anchor.download = 'Curtis Caulfield CV.pdf'
        anchor.target = '_blank'
        anchor.click()
    }

    return (
        <StyledPageContainer>
            <HeroContainer>
                <div>
                    <StaticImage
                        src='../images/portrait.png'
                        alt='A portrait of Curtis Caulfield.'
                        placeholder='none'
                        style={{
                            mask: 'linear-gradient(black, 95%, transparent)',
                            WebkitMask: 'linear-gradient(black, 95%, transparent)'
                        }} />
                </div>
                <HeroMain>
                    <HeroText>
                        <h1>Hey, my name is Curtis.</h1>
                        <p>
                            An undergraduate, currently studying a Masters degree in Software Engineering, Curtis is
                            a seasoned engineer with a relentless ambition and desire to succeed. With intricate
                            knowledge of software architecture and countless tried-and-tested real-world applications,
                            Curtis' results-driven approach makes him the perfect candidate for your next big project.
                        </p>
                    </HeroText>
                    <LinkContainer>
                        <div>
                            <DownloadButton
                                onClick={downloadCv}>
                                <span>Download CV</span>
                                <i><FaDownload /></i>
                            </DownloadButton>
                        </div>
                        <SocialLinks>
                            <FontAwesomeIcon
                                href="https://www.instagram.com/curtiscaulfield/"
                                target="_blank"
                                title="Instagram">
                                    <FaInstagram />
                            </FontAwesomeIcon>
                            <FontAwesomeIcon
                                href="https://www.linkedin.com/in/curtiscaulfield/"
                                target="_blank"
                                title="LinkedIn">
                                    <FaLinkedin />
                            </FontAwesomeIcon>
                            <FontAwesomeIcon
                                href="https://github.com/codedbycurtis"
                                target="_blank"
                                title="GitHub">
                                    <FaGithub />
                            </FontAwesomeIcon>
                        </SocialLinks>
                    </LinkContainer>
                </HeroMain>
            </HeroContainer>
        </StyledPageContainer>
    )
}

export default IndexPage

export const Head = () => <Seo />