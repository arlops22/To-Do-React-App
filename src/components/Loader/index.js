import React from 'react';

import GlobalStyle from '../../assets/styles/global';
import { Container, Load } from './styles';
 
export default function Loader() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Load />
                <h2>Loading...</h2>
            </Container>
        </>
    );
}
