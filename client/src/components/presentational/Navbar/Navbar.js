import React from 'react';

import NavbarLayout from './NavbarLayout';
import AnouncementBar from './AnnouncementBar';
import LogoBar from './LogoBar';
import TopNavBar from './TopNavBar';
import SubNavBar from './SubNavBar';

const Navbar = () => {
    return (
        <NavbarLayout
            announcement={<AnouncementBar text="free shipping" loc="announce"/>}
            logo={<LogoBar loc="logo"/>}
            topNav={<TopNavBar loc="topNav"/>}
            subNav={<SubNavBar loc="subNav"/>}
        />        
    );
};

export default Navbar;