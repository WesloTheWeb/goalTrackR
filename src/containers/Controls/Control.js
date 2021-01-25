import React from 'react';
import Create from '../../components/Buttons/Create';
import Logout from '../../components/Buttons/Logout';
import classes from './Controls.module.css';

const { controlContainer, controlPad } = classes;

const Controls = (props) => {
    return (
        <section className={controlContainer}>
            <div className={controlPad}>
                <h2>Controls</h2>
                <p>
                    Below here you can create new goals. To delete a goal click the trash icon, to edit click the pencil.
                </p>
                <div class="two-select">
                    <Create />
                    <Logout />
                </div>

            </div>
        </section>
    );
};

export default Controls;