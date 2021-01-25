import React from 'react';
import classes from './LandingPage.module.css';
import Form from '../Form/Form';

const { UIPortion, divider, LogoContainer } = classes;

const LandingPage = (props) => {
    return (
        <section className={divider}>
            <div className={UIPortion}>
                <h1>Goal TrackR</h1>
                <div className={LogoContainer}>
                    <img src="https://placehold.it/280/94C6EB" />
                </div>
                <h3>A place to track Goals</h3>
                <div>
                    <p>
                        To go on account parrel fore prow hempen halter bucko topsail ye scurvy provost.
                        Parley pink chandler scuttle grog blossom dance the hempen jig me reef sails pillage interloper.
                        Gangway hornswaggle maroon landlubber or just lubber chandler measured fer yer chains lad Admiral of
                        the Black pillage to go on account.
                    </p>
                </div>
                <Form />
            </div>
            <div>
                Coming Soon!
            </div>
        </section>
    );
};


export default LandingPage;