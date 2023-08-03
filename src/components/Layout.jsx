import React from 'react'
import { styled } from 'styled-components'
import Header from './Header/Header'

const MaxSize = styled.div`
    width: 100%;
    height: 100%;
`

const Wrapper = styled(MaxSize)`
    position: absolute;
    display: grid;
    grid-template-rows: auto 1fr;
`

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <MaxSize>
                {children}
            </MaxSize>
        </Wrapper>
    )
}

export default Layout