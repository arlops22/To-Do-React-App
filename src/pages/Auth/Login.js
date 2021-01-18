import React, { useContext } from 'react';

import { Context } from '../../Context/AuthContext';

import {
    Container,
    Form,
    InputGroup,
    Button,
    SecondaryButton
} from './styles';
import GlobalStyle from '../../assets/styles/global';

export default function Login() {
    const { handleLogin } = useContext(Context);

    return (
        <>
            <GlobalStyle />
            <Container>
                <h1>Log in</h1>
                <Form onSubmit={handleLogin}>
                    <InputGroup>
                        <label htmlFor="email">E-mail: </label>
                        <input type="text" name="email" id="email" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" />
                    </InputGroup>
                    <Button type="submit">Login</Button>
                    <SecondaryButton to='/signup'>Sign Up</SecondaryButton>
                </Form>
            </Container>
        </>
    )
}
