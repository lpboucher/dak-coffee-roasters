import React, { Fragment } from 'react';

import Button from '../../utils/Button';

import './Limited.css';

const LimitedEditionsIntro = () => {
    return (
        <Fragment>
            <div className="container light-bg">
                <div className="limited-intro-grid">
                    <div className="limited-intro-title">
                        <h3>Our Limited Edition</h3>
                        <h4>Caffeine Needed</h4>
                    </div>
                    <div className="limited-intro-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="limited-intro-thumbnail">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/61jDQinRyzL._SX425_.jpg" alt=""/>
                    </div>
                </div>
                <Button />
            </div>
        </Fragment>
    );
};

export default LimitedEditionsIntro;