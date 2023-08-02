import * as React from 'react';
import { styled } from 'styled-components';

const LogoContainer = styled.div`
    opacity: 0.5;
    transition: opacity 250ms;

    &:hover {
        opacity: 1;
    }

    & h1 {
        margin: 0;
        font-family: 'Rock Salt', cursive;
        font-size: 1.5rem;
    }

    & h1::selection {
        background-color: transparent;
        color: crimson;
    }

    :nth-child(1) {
        position: relative;
        top: 12.5%;
    }

    :nth-child(2) {
        position: relative;
        top: -12.5%;
        left: 25%;
    }
`;

const Logo = () => {
    return (
        <LogoContainer>
            <h1>Curtis</h1>
            <h1>Caulfield</h1>
        </LogoContainer>
    );
};

export default Logo;