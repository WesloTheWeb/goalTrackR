import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Buttons.module.css';


const { login } = classes;

const Login = (props) => {
    return (
        <button className={login} type="submit" value="submit">
            <Link to="/dashboard">Login</Link>
        </button>
    );
};


export default Login;