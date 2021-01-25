import React from 'react';
import classes from "./Form.module.css";
import SignUp from '../Buttons/SignUp';
import Login from '../Buttons/Login';

const { loginScreen, loginCTAContainer } = classes;

const Form = (props) => {
    return (
        <>
            <form className={loginScreen}>
                <label for="email">Email</label>
                <input type="text" name="email" />
                <label for="password">Password</label>
                <input type="text" name="password" />
            </form>
            <div className={loginCTAContainer}>
                <SignUp />
                <Login />
            </div>
        </>
    );
};


export default Form;