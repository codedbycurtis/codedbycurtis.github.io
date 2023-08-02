import React from 'react'
import Style from './src/components/Style'
import Layout from './src/components/Layout'

export const wrapRootElement = ({ element }) => {
    return <Style>{element}</Style>
}

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}