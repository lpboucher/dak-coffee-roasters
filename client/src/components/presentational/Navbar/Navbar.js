import React from 'react';

import NavbarLayout from './NavbarLayout';
import AnouncementBar from './AnnouncementBar';
import LogoBar from './LogoBar';
import TopNavContainer from '../../container/Navbar/TopNavContainer';
import SubNavBar from './SubNavBar';

const Navbar = () => {
    return (
        <NavbarLayout
            announcement={<AnouncementBar text="free shipping" loc="announce"/>}
            logo={<LogoBar loc="logo"/>}
            topNav={<TopNavContainer loc="topNav"/>}
            subNav={<SubNavBar loc="subNav"/>}
        />        
    );
};

export default Navbar;