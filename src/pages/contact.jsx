import React, { useRef } from 'react'
import { css, styled } from 'styled-components'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import PageContainer from '../components/PageContainer'
import Subheading from '../components/Subheading'

const ContactContainer = styled.div`
    width: 100%;
    max-width: 600px;
    display: grid;
    place-items: center;
    border: 1px solid rgb(40, 40, 40);
    border-radius: 1rem;
    padding: 1rem;
    background-color: rgb(15, 15, 15);
    color: white;
`

const SocialLinks = styled.div`
    display: flex;
    column-gap: 2rem;
`

const FontAwesomeIcon = styled.a`
    font-size: 2rem;
    text-decoration: none;
    color: gray;

    &:hover {
        color: white;
    }
`

const EmailForm = styled.form`
    padding: 1.5rem 0;

    & input, & textarea {
        display: block;
    }
`

const TextInputBase = css`
    width: 100%;
    margin: 0 0 1rem 0;
    padding: 0.5rem;
    border: 1px solid rgb(45, 45, 45);
    border-radius: 0.5rem;
    outline: none;
    background-color: rgb(20, 20, 20);
    color: white;
    font-size: 1rem;

    &:focus {
        border-color: crimson;
    }
`

const TextInput = styled.input`
    ${TextInputBase}
`

const TextArea = styled.textarea`
    ${TextInputBase}
`

const SubmitButton = styled.input`
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 0;
    background-color: crimson;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: filter 200ms;

    &:hover {
        filter: brightness(90%);
    }

    &:active {
        filter: brightness(75%);
    }
`

const ContactPage = () => {
    const emailFormRef = useRef()
    const subjectInputRef = useRef()
    const bodyInputRef = useRef()

    const onEmailFormSubmit = () => {
        const subject = subjectInputRef.current.value
        const body = bodyInputRef.current.value
        emailFormRef.current.action = encodeURI(`mailto:curtiscaulfield123@gmail.com?subject=${subject}&body=${body}`)
    }

    return (
        <PageContainer>
            <ContactContainer>
                <Subheading>Drop me an email!</Subheading>
                <EmailForm ref={emailFormRef} method='POST' onSubmit={onEmailFormSubmit}>
                    <TextInput ref={subjectInputRef} type='text' placeholder='Subject' />
                    <TextArea ref={bodyInputRef} placeholder='Enter your message here' />
                    <SubmitButton type='submit' value='Send' />
                </EmailForm>
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
            </ContactContainer>
        </PageContainer>
    )
}

export default ContactPage

export const Head = () => <title>Curtis Caulfield | Contact</title>