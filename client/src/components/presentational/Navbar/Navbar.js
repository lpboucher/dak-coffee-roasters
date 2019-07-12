import React from 'react';

import NavbarLayout from './NavbarLayout';
import LogoBar from './LogoBar';
import TopNavBar from './TopNavBar';
import SubNavBar from './SubNavBar';

const Navbar = () => {
    return (
        <NavbarLayout
            logo={<LogoBar loc="logo"/>}
            topNav={<TopNavBar loc="topNav"/>}
            subNav={<SubNavBar loc="subNav"/>}
        />        
    );
};

export default Navbar;