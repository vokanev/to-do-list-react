import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/useAuth';

const LoginPage = () => {
    const location = useLocation();
    const navigate = useNavigate(); 
    const {signIn} = useAuth();

    const fromPage = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        signIn(event.target.username.value, () => navigate(fromPage, {replace: true}));
         
    }
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>Name: <input type='text' name='username' />
                </label>
                <button type='submit'>Log in</button>
            </form>
        </div>
    );
}

export default LoginPage;
