import React from 'react';
import classes from './Dashboard.module.css';
import Controls from '../Controls/Control';
import Terminal from '../../components/Terminal/Terminal';

const { dashboardContainer } = classes;

const Dashboard = (props) => {

    const TerminalDisplays = [
        {
            name: `To do's`,
            description: `Here are your current to-do's items`
        },
        {
            name: `Complete`,
            description: `Here are the goals you reached!`
        }
    ]

    return (
        <div className={dashboardContainer}>
            <Controls />
            { TerminalDisplays.map((box) =>
                <Terminal key={box.name} name={box.name} description={box.description} />
            )}
        </div>
    );
};


export default Dashboard;