import { useState, useEffect } from 'react';

import api from '../api';
import history from '../history';

export default function useAuth() {
    const [ authenticated, setAuthenticated ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {

        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);

    }, [])

    async function handleLogin(e) {
        e.preventDefault();
        const { email, password } = e.target.elements;
        
        setAuthenticated(true);

        const { data: {token} } = await api.post('/authenticate', {
            email: email.value,
            password: password.value
        });

        localStorage.setItem('token', JSON.stringify(token));

        api.defaults.headers.Authorization = `Bearer ${token}`;
        
        history.push('/');

    }

    function handleLogout() {
        
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        history.push('/login');
        setAuthenticated(false);

    }

    async function handleSignUp(e) {
        e.preventDefault();
        const { username, email, password } = e.target.elements;

        setAuthenticated(true);

        const { data: {token} } = await api.post('/register', {
            username: username.value,
            email: email.value,
            password: password.value
        });

        localStorage.setItem('token', JSON.stringify(token));

        api.defaults.headers.Authorization = `Bearer ${token}`;
        
        history.push('/');

    }

    return { authenticated, loading, handleLogin, handleLogout, handleSignUp }
}