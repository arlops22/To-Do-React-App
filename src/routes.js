import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Auth/Login.js';
import SignUp from './pages/Auth/SignUp.js';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
        </Switch>
    );
}