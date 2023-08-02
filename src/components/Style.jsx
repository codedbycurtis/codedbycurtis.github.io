import React from 'react'
import { createGlobalStyle } from 'styled-components'
import '@fontsource/rock-salt'
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        margin: 0;
        background-color: rgb(12, 12, 12);
        color: white;
    }
`

const Style = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    )
}

export default Style