import React from 'react';

import NavbarLayout from './NavbarLayout';
import LogoBar from './LogoBar';
import TopNavBar from './TopNavBar';
import SubNavBar from './SubNavBar';

const Navbar = () => {
    return (
        <NavbarLayout
            logo={<LogoBar />}
            topNav={<TopNavBar />}
            subNav={<SubNavBar />}
        />        
    );
};

export default Navbar;