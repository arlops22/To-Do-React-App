import React, { useState, useEffect } from 'react';

import api from '../../api';

import GlobalStyle from '../../assets/styles/global';
import { Container } from './styles';
import Header from '../../components/Header';
import TaskList from '../../components/TaskList';


export default function Home() {
    const [ user, setUser ] = useState({});

    useEffect(() => {

        (async () => {
            const { data } = await api.get('/profile');
                
            setUser(data);
        })();

    }, []);

    return (
        <>
            <Header />
            <Container>

                <h1>Hello, {user.username}</h1>
                <TaskList />

            </Container>
            
            <GlobalStyle />
        </>
    )
}
