import React, { Fragment } from 'react';

import TopNavBar from './TopNavBar';
import SubNavBar from './SubNavBar';

const Navbar = () => {
    return (
        <Fragment>
            <TopNavBar />
            <SubNavBar />
        </Fragment>
    );
};

export default Navbar;