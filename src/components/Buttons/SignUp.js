import React from 'react';
import classes from './Buttons.module.css';

const { signup } = classes;

const SignUp = (props) => {
    return (
        <button className={signup}>
            Sign Up
        </button>
    );
};


export default SignUp;