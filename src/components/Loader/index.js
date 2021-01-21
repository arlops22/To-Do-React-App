import React from 'react';

import GlobalStyle from '../../assets/styles/global';
import { Container, Load } from './styles';
 
function Loader() {
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

export default Loader;
