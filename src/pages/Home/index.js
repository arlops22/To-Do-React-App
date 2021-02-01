import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import api from '../../api';
import { TaskProvider } from '../../Context/TaskContext';

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
        <DndProvider backend={HTML5Backend}>
        <TaskProvider>
            <Header />
            <Container>

                <h1>Hello, {user.username}</h1>
                <TaskList />

            </Container>
            
            <GlobalStyle />
            
        </TaskProvider>
        </DndProvider>
    )
}
