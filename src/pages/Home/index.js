import React from 'react';
import { GrAdd } from 'react-icons/gr';
import { MdMoreHoriz } from 'react-icons/md';

import GlobalStyle from '../../assets/styles/global';
import { Container, Table, ButtonNew } from './styles.js';

export default function Home() {
    return (
        <>
            <Container>

                <h1>To Do List</h1>

                <Table>
                    <tr>
                        <th></th>
                        <th>Tasks</th>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="aciton-input" id="aciton-input"/></td>
                        <td>Lavar Louça <button><MdMoreHoriz/></button></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><ButtonNew><GrAdd/> New</ButtonNew></td>
                    </tr>
                </Table>

            </Container>
            
            <GlobalStyle />
        </>
    )
}
