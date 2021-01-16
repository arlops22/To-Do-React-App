import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes.js';
import history from './history.js';

export default function App() {
    return (
        <Router history={history}>
            <Routes />
        </Router>
    )
}
