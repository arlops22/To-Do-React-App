import React from 'react';

import GlobalStyle from '../../assets/styles/global.js';
import {
    Container,
    Form,
    InputGroup,
    Button,
    SecondaryButton
} from './styles.js';

export default function Login() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <h1>Log in</h1>
                <Form>
                    <InputGroup>
                        <label for="email">E-mail: </label>
                        <input type="text" name="email" />
                    </InputGroup>
                    <InputGroup>
                        <label for="password">Password: </label>
                        <input type="password" name="password" />
                    </InputGroup>
                    <Button>Login</Button>
                    <SecondaryButton to='/signup'>Sign Up</SecondaryButton>
                </Form>
            </Container>
        </>
    )
}
