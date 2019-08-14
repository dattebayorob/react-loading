import React from 'react'
import { Container, Gif } from './style'
import gif from './assets/loading.gif'

export const Loading = ({ isLoading, children }) => (
    isLoading ? 
    <Container fullScreen={!children}>
        <Gif src={gif} alt="Loading ..." />
    </Container> :
    children ? children : null
)