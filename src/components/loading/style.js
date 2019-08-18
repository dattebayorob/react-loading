import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: '100%';
    left: 0;
    top: 0;
    align-items: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0.5;
    background: transparent;
    height: ${props => props.fullScreen ? '100%' : 'auto'};
    position: ${props => props.fullScreen ? 'fixed': 'inherit'};
    z-index: ${props => props.fullScreen ? '999999': 'auto'};
`

export const Gif = styled.img`
    width: 5%
`