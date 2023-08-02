import * as React from 'react'
import { styled } from 'styled-components'
import Flyout from './Flyout'
import Navbar from './Navbar'

const HeaderContainer = styled.header`
    display: grid;
    place-items: center;
    background-color: black;
`

const FlyoutContainer = styled.div`
    display: block;

    @media (min-width: 768px) {
        display: none;
    }
`

const NavbarContainer = styled.div`
    width: 100%;
    display: none;
    max-width: 1200px;

    @media (min-width: 768px) {
        display: grid;
    }
`

const Header = () => {
    const items = [
        {
            route: '/',
            title: 'HOME',
        },
        {
            route: '/about',
            title: 'ABOUT',
        },
        {
            route: '/projects',
            title: 'PROJECTS',
        },
        {
            route: '/contact',
            title: 'CONTACT',
        },
    ]

    return (
        <HeaderContainer>
            <FlyoutContainer>
                <Flyout items={items} />
            </FlyoutContainer>
            <NavbarContainer>
                <Navbar items={items} />
            </NavbarContainer>
        </HeaderContainer>
    )
}

export default Header