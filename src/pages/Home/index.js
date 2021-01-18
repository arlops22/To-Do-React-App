import React, { useState, useEffect } from 'react';
import { MdAdd, MdDelete, MdMoreHoriz, MdEdit } from 'react-icons/md';

import api from '../../api';

import GlobalStyle from '../../assets/styles/global';
import { Container, Table, TaskData, MenuAction, ButtonNew, ActionsButton } from './styles';
import Header from '../../components/Header';


export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [menuAction, setMenuAction] = useState(false);
    const [taskStatus, setTaskStatus] = useState(false);

    useEffect(() => {
        
        (async () => {
            const { data } = await api.get('/tasks');

            setTasks(data);
        })();

    }, [])


    return (
        <>
            <Header />
            <Container>

                <h1>To Do List</h1>
                <Table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task) => {
                                return(
                                    <tr key={task.id}>
                                        <td><input onChange={() => setTaskStatus(prevState => !prevState)} type="checkbox" name="aciton-input" id="aciton-input"/></td>
                                        <td>
                                            <TaskData status={taskStatus}>{task.taskName}</TaskData> 
                                            <MenuAction open={menuAction}>
                                                <ActionsButton onClick={() => setMenuAction((prevState) => !prevState)}><MdMoreHoriz/></ActionsButton>
                                                <ul >
                                                    <li><button><MdEdit />Update</button></li>
                                                    <li><button><MdDelete />Delete</button></li>
                                                </ul>
                                            </MenuAction>
                                        </td>                    
                                    </tr>
                                )
                            })
                        }
                        
                        <tr>
                            <td></td>
                            <td><ButtonNew><MdAdd/> New</ButtonNew></td>
                        </tr>
                    </tbody>
                </Table>

            </Container>
            
            <GlobalStyle />
        </>
    )
}
