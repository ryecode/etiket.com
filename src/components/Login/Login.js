import React from 'react';
import LoginForm from './LoginForm';

const Login = ({accounts}) => {
    return (
        <div className="app">
            <div className="login-form">
                <LoginForm accounts={accounts} />
            </div>
        </div>
    );
}

export default Login;