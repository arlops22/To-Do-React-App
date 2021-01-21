import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';
import { Nav } from './styles.js';

export default function Header() {
    const { handleLogout } = useContext(Context);
    
    return (
        <Nav>
            <ul>
                <li><Link to="/">Tasks</Link></li>
                <li><button onClick={handleLogout}>Sair</button></li>
            </ul>
        </Nav>
    )
}
