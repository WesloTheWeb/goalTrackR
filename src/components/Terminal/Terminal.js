import React from 'react';
import classes from './Terminal.module.css';

const { terminalContainer } = classes;

const Terminal = (props) => {
    return (
        <>
            <section className={terminalContainer}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </section>
        </>
    );
};


export default Terminal;