import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './styles.js';

export default function Header() {
    return (
        <Nav>
            <ul>
                <li><Link to="/">Tasks</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
            </ul>
        </Nav>
    )
}
