import React from 'react'
import { Link } from 'gatsby'
import { styled } from 'styled-components'
import { SiFlutter, SiDart, SiJavascript, SiHtml5, SiCss3,
    SiReact, SiGatsby, SiCsharp, SiDotnet, SiXamarin } from 'react-icons/si'
import PageContainer from '../../components/PageContainer'

const ProjectGrid = styled.div`
    max-width: 1200px;
    display: grid;
    row-gap: 1rem;
    column-gap: 1rem;
    padding: 1rem;

    @media screen and (min-width: 600px) {
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 992px) {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: repeat(3, 1fr);
    }
`

const Card = styled.div`
    border: 1px solid rgb(40, 40, 40);
    border-radius: 1rem;
    padding: 1rem;
    background-color: rgb(15, 15, 15);
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: filter 200ms;

    &:visited {
        color: inherit;
    }

    &:hover {
        filter: brightness(125%);
    }

    &:active {
        filter: brightness(110%);
    }

    & h1 {
        margin: 0;
        font-weight: 500;
    }

    & p {
        margin: 0;
        color: rgb(215, 215, 215);
    }
`

const PlaceholderCard = styled(Card)`
    display: grid;
    place-items: center;
    border-width: 2px;
    border-style: dashed;
    background-color: transparent;
    color: grey;
    cursor: default;
`

const LanguageIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0;

    & * {
        margin-right: 0.5rem;
    }
`

const FlutterIcon = styled(SiFlutter)`
    color: rgb(1, 152, 231);
`

const DartIcon = styled(SiDart)`
    color: rgb(43, 182, 246);
`

const Html5Icon = styled(SiHtml5)`
    color: rgb(221, 71, 37);
`

const Css3Icon = styled(SiCss3)`
    color: rgb(25, 111, 181);
`

const JavascriptIcon = styled(SiJavascript)`
    color: rgb(235, 215, 76);
`

const ReactIcon = styled(SiReact)`
    color: rgb(0, 216, 255);
`

const GatsbyIcon = styled(SiGatsby)`
    color: rgb(102, 52, 152);
`

const CsharpIcon = styled(SiCsharp)`
    color: rgb(152, 70, 143);
`

const DotnetIcon = styled(SiDotnet)`
    color: rgb(107, 68, 154);
`

const XamarinIcon = styled(SiXamarin)`
    color: rgb(50, 146, 210);
`

const ProjectsPage = () => {
    return (
        <PageContainer>
            <ProjectGrid>
                <Card
                    as={Link}
                    to='freeplay-music'>
                    <h1>Freeplay Music</h1>
                    <LanguageIconContainer>
                        <FlutterIcon />
                        <DartIcon />
                    </LanguageIconContainer>
                    <p>
                        My largest project to date; this cross-platform app for iOS and Android is being created with Flutter and utilises
                        YoutubeExplodeDart alongside my own SoundCloud API to allow users to play, save, and download music from
                        both YouTube and SoundCloud in one intuitive interface.
                    </p>
                </Card>
                <Card
                    as='a'
                    href='https://github.com/codedbycurtis'
                    target='_blank'>
                    <h1>SoundCloud API</h1>
                    <LanguageIconContainer>
                        <DartIcon />
                    </LanguageIconContainer>
                    <p>
                        Written in Dart, this API will be able to scrape track, playlist, album, and author metadata from the SoundCloud website,
                        including HLS and stream manifests, enabling playback and download of tracks without ever creating
                        an account or needing an API key.
                    </p>
                </Card>
                <Card
                    as='a'
                    href='https://github.com/codedbycurtis/volume-control'
                    target='_blank'>
                    <h1>Volume Control</h1>
                    <LanguageIconContainer>
                        <Html5Icon />
                        <Css3Icon />
                        <JavascriptIcon />
                    </LanguageIconContainer>
                    <p>
                        A cross-platform browser extension that supports both Firefox and Chrome that enables users to
                        change the relative volume of individual tabs, rather than that of the browser as a whole.
                    </p>
                </Card>
                <Card
                    as='a'
                    href='https://github.com/codedbycurtis/codedbycurtis.github.io'
                    target='_blank'>
                    <h1>This Website</h1>
                    <LanguageIconContainer>
                        <Html5Icon />
                        <Css3Icon />
                        <JavascriptIcon />
                        <ReactIcon />
                        <GatsbyIcon />
                    </LanguageIconContainer>
                    <p>
                        The website you're looking at right now has been built entirely from scratch using GatsbyJS and styled-components,
                        and conforms to accessibility requirements through the use of semantic HTML elements.
                    </p>
                </Card>
                <Card
                    as='a'
                    href='https://github.com/codedbycurtis'
                    target='_blank'>
                    <h1>Much More</h1>
                    <LanguageIconContainer>
                        <CsharpIcon />
                        <DotnetIcon />
                        <XamarinIcon />
                    </LanguageIconContainer>
                    <p>
                        Projects that I haven't mentioned here are available on my GitHub, with many more to come in
                        the foreseeable future!
                    </p>
                </Card>
                <PlaceholderCard>
                    <h1>Coming Soon!</h1>
                </PlaceholderCard>
            </ProjectGrid>
        </PageContainer>
    )
}

export default ProjectsPage

export const Head = () => <title>Curtis Caulfield | Projects</title>