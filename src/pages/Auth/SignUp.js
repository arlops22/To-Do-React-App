import React from 'react';

import GlobalStyle from '../../assets/styles/global';
import {
    Container,
    Form,
    InputGroup,
    Button,
    SecondaryButton
} from './styles';

export default function SignUp() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <h1>Sign Up</h1>
                <Form>
                    <InputGroup>
                        <label htmlFor="username">Username: </label>
                        <input type="text" name="username" id="username" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="email">E-mail: </label>
                        <input type="text" name="email" id="email" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" />
                    </InputGroup>
                    <Button>Sign Up</Button>
                    <SecondaryButton to='/login'>Login</SecondaryButton>
                </Form>
            </Container>
        </>
    )
}
