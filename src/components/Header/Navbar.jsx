import * as React from 'react'
import { styled } from 'styled-components'
import StyledLink from '../StyledLink'
import Logo from './Logo'

const NavigationBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;

    & nav {
        align-self: center;
    }

    & ul {
        display: flex;
        column-gap: 2rem;
        list-style-type: none;
    }

    & ul a {
        color: gray;
        text-decoration: none;
        transition: color 250ms;
    }

    & ul a:hover {
        color:crimson;
    }
`

const Navbar = props => {
    return (
        <NavigationBar>
            <Logo />
            <nav>
                <ul>
                    {props.items.map((element, index) => {
                        return (
                            <li key={index}>
                                <StyledLink
                                    to={element.route}
                                    activeClassName='active'>
                                    {element.title}
                                </StyledLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </NavigationBar>
    )
}

export default Navbar