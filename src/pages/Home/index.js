import React from 'react';
import { MdAdd } from 'react-icons/md';
import { MdMoreHoriz } from 'react-icons/md';

import GlobalStyle from '../../assets/styles/global';
import { Container, Table, TaskRow, ButtonNew, ActionsButton } from './styles.js';
import Header from '../../components/Header';

export default function Home() {
    return (
        <>
            <Header />
            <Container>

                <h1>To Do List</h1>

                <Table>
                    <tr>
                        <th></th>
                        <th>Tasks</th>
                    </tr>
                    <TaskRow>
                        <td><input type="checkbox" name="aciton-input" id="aciton-input"/></td>
                        <td><p>Lavar Louça</p> <ActionsButton><MdMoreHoriz/></ActionsButton></td>
                    </TaskRow>
                    <tr>
                        <td></td>
                        <td><ButtonNew><MdAdd/> New</ButtonNew></td>
                    </tr>
                </Table>

            </Container>
            
            <GlobalStyle />
        </>
    )
}
