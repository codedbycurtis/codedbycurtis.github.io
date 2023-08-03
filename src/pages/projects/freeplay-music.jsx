import React from 'react'
import { styled } from 'styled-components'
import Seo from '../../components/Seo'
import PageContainer from '../../components/PageContainer'
import Heading from '../../components/Heading'

const StyledPageContainer = styled(PageContainer)`
    background-color: black;
`

const CenterText = styled.div`
    text-align: center;
`

const StyledHeading = styled(Heading)`
    color: lightgrey;
    font-size: 4rem;
`

const CustomSubheading = styled.h2`
    color: darkgrey;
    font-size: 2rem;
    font-weight: 300;
`

const AlignBottomCenter = styled.div`
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -100%);
`

const Subtext = styled.p`
    color: grey;
    font-weight: 300;
`

const FreeplayMusicPage = () => {
    return (
        <StyledPageContainer>
            <CenterText>
                <StyledHeading>Freeplay Music</StyledHeading>
                <CustomSubheading>An all-new way to experience sound.</CustomSubheading>
            </CenterText>
            <AlignBottomCenter>
                <Subtext>Coming soon</Subtext>
            </AlignBottomCenter>
        </StyledPageContainer>
    )
}

export default FreeplayMusicPage

export const Head = () => <Seo title='Freeplay Music | Coming soon' />