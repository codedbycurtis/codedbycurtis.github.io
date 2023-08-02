import * as React from 'react';
import { Link } from 'gatsby';
import { styled } from 'styled-components';
import { VscMenu, VscClose } from 'react-icons/vsc';
import Logo from './Logo';

const Navbar = styled.div`
    display: grid;
    justify-items: center;
    background-color: black;
`;

const FlyoutToggleButton = styled.button`
    position: absolute;
    top: 8px;
    left: 8px;
    padding: 0;
    border: none;
    background-color: transparent;
    color: white;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 250ms;

    :hover {
        opacity: 1;
    }

    i {
        font-size: 2rem;
    }
`;

const LogoContainer = styled.div`
    position: relative;
    left: -12.5%;
    display: flex;
`

const FlyoutMenu = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: none;
    place-items: center;
    background-color: black;
    z-index: 99;

    ul {
        display: grid;
        row-gap: 1rem;
        list-style-type: none;
        padding: 0;
    }

    ul a {
        color: grey;
        text-decoration: none;
        transition: color 250ms;
    }

    ul a:hover {
        color: crimson;
    }
`;

const StyledLink = styled(Link)`
    font-size: 2rem;

    &::before {
        content: '• ';
        color: transparent;
    }

    &.active::before {
        color: crimson;
    }
`;

const Flyout = props => {
    const toggleFlyout = () => {
        const flyoutMenu = document.getElementById('flyout-menu');

        if (flyoutMenu.style.display === 'grid') {
            flyoutMenu.style.display = 'none';
        } else {
            flyoutMenu.style.display = 'grid';
        }
    };

    return (
        <div>
            <Navbar>
                <FlyoutToggleButton
                    title="Open Menu"
                    onClick={toggleFlyout}>
                        <VscMenu size='2rem' />
                </FlyoutToggleButton>
                <div>
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>
                </div>
            </Navbar>
            <FlyoutMenu id="flyout-menu">
                <FlyoutToggleButton
                    title="Close Menu"
                    onClick={toggleFlyout}>
                        <VscClose size='2rem' />
                </FlyoutToggleButton>
                <nav>
                    <ul>
                        {props.items.map((element, index) => {
                            return (
                                <li key={index}>
                                    <StyledLink
                                        activeClassName="active"
                                        to={element.route}
                                        onClick={toggleFlyout}>
                                            {element.title}
                                    </StyledLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </FlyoutMenu>
        </div>
    );
};

export default Flyout;