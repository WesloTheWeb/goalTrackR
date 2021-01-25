import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Buttons.module.css';

const { logout } = classes;

const Logout = (props) => {
    return (
        <button className={logout} type="submit" value="submit">
            <Link to="/">Logout</Link>
        </button>
    );
};

export default Logout;