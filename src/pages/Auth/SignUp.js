import React from 'react';

import GlobalStyle from '../../assets/styles/global.js';
import {
    Container,
    Form,
    InputGroup,
    Button,
    SecondaryButton
} from './styles.js';

export default function SignUp() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <h1>Sign Up</h1>
                <Form>
                    <InputGroup>
                        <label for="username">Username: </label>
                        <input type="text" name="username" />
                    </InputGroup>
                    <InputGroup>
                        <label for="email">E-mail: </label>
                        <input type="text" name="email" />
                    </InputGroup>
                    <InputGroup>
                        <label for="password">Password: </label>
                        <input type="password" name="password" />
                    </InputGroup>
                    <Button>Sign Up</Button>
                    <SecondaryButton to='/login'>Login</SecondaryButton>
                </Form>
            </Container>
        </>
    )
}
