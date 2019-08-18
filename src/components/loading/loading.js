import React from 'react';
import gif from '../../assets/loading.gif';
import { Container, Gif } from './style';

export const Loading = ({ isLoading, children }) => {
    return (
            isLoading ? 
            <Container fullScreen={!children}>
                <Gif src={gif} alt="Loading ..." />
            </Container> :
            children ? children : null
    )
}