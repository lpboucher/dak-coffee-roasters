import React, { Fragment } from 'react';

import Button from '../../utils/Button';

import './Subscriptions.css';

const SubscriptionIntro = () => {
    return (
        <Fragment>
            <div className="container mid-bg">
                <div className="sub-intro-grid">
                    <div className="sub-intro-thumbnail"></div>
                    <div className="sub-intro-title">
                        <h3>Monthly Coffee Subscription</h3>
                        <h4>From €15 | Free Shipping</h4>
                    </div>
                    <div className="sub-intro-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <Button />
            </div>
        </Fragment>
    );
};

export default SubscriptionIntro;