import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './Context/AuthContext';

import Home from './pages/Home';
import Login from './pages/Auth/Login.js';
import SignUp from './pages/Auth/SignUp.js';

function CustomRoute({ isPrivate, ...rest }) {
    const { loading, authenticated } = useContext(Context);

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    if (isPrivate && !authenticated) {
        return <Redirect to='/login'/>
    }


    return <Route {...rest}/>
}

export default function Routes() {
    return (
        <Switch>
            <CustomRoute isPrivate exact path='/' component={Home} />
            <CustomRoute exact path='/login' component={Login} />
            <CustomRoute exact path='/signup' component={SignUp} />
        </Switch>
    );
}