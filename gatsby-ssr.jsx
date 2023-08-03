import React from 'react'
import '@fontsource/rock-salt'
import '@fontsource/poppins'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import GlobalStyle from './src/components/GlobalStyle'
import Layout from './src/components/Layout'

export const wrapPageElement = ({ element, props }) => {
    return (
        <>
            <GlobalStyle />
            <Layout {...props}>{element}</Layout>
        </>
    )
}