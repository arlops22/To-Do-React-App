import React, { useState } from 'react';
import { MdAdd, MdDelete, MdMoreHoriz, MdEdit } from 'react-icons/md';

import GlobalStyle from '../../assets/styles/global';
import { Container, Table, TaskData, MenuAction, ButtonNew, ActionsButton } from './styles.js';
import Header from '../../components/Header';


export default function Home() {

    const [menuAction, setMenuAction] = useState(false);
    const [taskStatus, setTaskStatus] = useState(false);

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
                        <tr>
                            <td><input onChange={() => setTaskStatus(prevState => !prevState)} type="checkbox" name="aciton-input" id="aciton-input"/></td>
                            <td>
                                <TaskData status={taskStatus}>Lavar Louça</TaskData> 
                                <MenuAction open={menuAction}>
                                    <ActionsButton onClick={() => setMenuAction((prevState) => !prevState)}><MdMoreHoriz/></ActionsButton>
                                    <ul>
                                        <li><button><MdEdit />Update</button></li>
                                        <li><button><MdDelete />Delete</button></li>
                                    </ul>
                                </MenuAction>
                            </td>                    
                        </tr>
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
