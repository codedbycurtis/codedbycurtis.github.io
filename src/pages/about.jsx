import React from 'react'
import { styled } from 'styled-components'
import Seo from '../components/Seo'
import PageContainer from '../components/PageContainer'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Timeline from '../components/Timeline'

const AboutContainer = styled.div`
    height: 100%;
    max-width: 1200px;
    padding: 0 4rem;
`

const JourneyContainer = styled.div`
    display: grid;
    column-gap: 1rem;

    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr auto;
    }
`

const EducationContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;

    @media screen and (min-width: 768px) {
        grid-template-columns: auto;
    }
`

const InstitutionContainer = styled.div`
    display: grid;
    align-items: center;
    grid-template-rows: repeat(3, 1fr);

    @media screen and (min-width: 768px) {
        align-items: start;
        grid-template-rows: unset;
        grid-template-columns: repeat(3, 1fr);
    }
`

const AboutPage = () => {
    const timelineItems = [
        {
            title: '2022',
            active: true
        },
        {
            title: '2020',
            active: false
        },
        {
            title: '2015',
            active: false
        }
    ]

    return (
        <PageContainer>
            <AboutContainer>
                <section>
                    <Heading>The Journey</Heading>
                    <JourneyContainer>
                        <div>
                            <p>
                                An undergraduate, currently in the second year of study for a Masters degree in Software Engineering at Queen's University Belfast, my journey in this
                                industry began over four years ago, and has quickly evolved from a daydream into a lifestyle.
                            </p>
                            <p>
                                What began as a love for video games, tinkering with the Unity engine, making cheap, knock-off side-scrollers, unexpectedly ignited a
                                burning passion for software development and has led me to pursue a career as a full-stack developer.
                            </p>
                            <p>
                                Passion aside, resolve is what has enabled me to overcome the numerous, seemingly insurmountable challenges that I have
                                faced during the 5 years I have been in the industry. Throughout this time, I have developed and deployed real-world desktop and
                                mobile applications using the .NET stack, including Windows Forms, WPF, Xamarin.Forms, and .NET MAUI. Moreover, I have utilised Flutter to build multiple cross-platform
                                applications, also for desktop and mobile. I am also well-versed in React frameworks, such as GatsbyJS, as well as CSS styling systems, including styled-components.
                            </p>
                            <p>
                                While I do spend a lot of time writing and reviewing code, I like to read books, with George Orwell being among one of my favourite authors. I also try to ensure I
                                allocate time for the gym, because as they say, a healthy body is a healthy mind.
                            </p>
                        </div>
                        <div>
                            <Subheading>Certifcates:</Subheading>
                            <a
                                href='https://www.testdome.com/certificates/ac8ae5e6bffe4e5b80af2875eeeea888'
                                target='_blank'
                                rel='noreferrer'
                                className='testdome-certificate-stamp gold'>
                                <span className='testdome-certificate-name'>Curtis Caulfield</span>
                                <span className='testdome-certificate-test-name'>C#</span>
                                <span className='testdome-certificate-card-logo'>TestDome<br />Certificate</span>
                            </a>
                        </div>
                    </JourneyContainer>
                </section>
                <section>
                    <Heading>Education</Heading>
                    <EducationContainer>
                        <Timeline items={timelineItems} />
                        <InstitutionContainer>
                            <div>
                                <Subheading>Queen's University Belfast</Subheading>
                                <p>MEng Software Engineering</p>
                                <ul>
                                    <li>Year 1 Grade: 1:1 (First-Class)</li>
                                    <li>Awarded for the best First-Class performance out of ~400 students.</li>
                                </ul>
                            </div>
                            <div>
                                <Subheading>Dalriada School (A-level)</Subheading>
                                <ul>
                                    <li>Digital Technology: A*</li>
                                    <li>Mathematics: A</li>
                                    <li>History: B</li>
                                </ul>
                            </div>
                            <div>
                                <Subheading>Ballymoney High School</Subheading>
                                <p>9 GCSEs A*-C</p>
                            </div>
                        </InstitutionContainer>
                    </EducationContainer>
                </section>
            </AboutContainer>
        </PageContainer>
    )
}

export default AboutPage

export const Head = () => {
    return (
        <Seo title='Curtis Caulfield | About'>
            <link
                rel='stylesheet'
                type='text/css'
                media='screen,print'
                href='https://www.testdome.com/content/source/stylesheets/embed.css' />
        </Seo>
    )
}