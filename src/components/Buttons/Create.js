import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Buttons.module.css';

const { create } = classes;

const Create = (props) => {
    return (
        <button className={create} type="submit" value="submit">
            <Link to="/">Create</Link>
        </button>
    );
};

export default Create;