import React from 'react';
import classes from './Buttons.module.css';

const { login } = classes;

const Login = (props) => {
    return (
        <button className={login} type="submit" value="submit">
            Login
        </button>
    );
};


export default Login;