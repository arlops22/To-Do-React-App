import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './styles.js';

export default function Header() {
    return (
        <Nav>
            <ul>
                <li><Link to="/">Tasks</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </Nav>
    )
}
