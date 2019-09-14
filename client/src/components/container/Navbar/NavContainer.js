import React, { Component } from 'react';

import NavbarLayout from '../../presentational/Navbar/NavbarLayout';
import AnouncementBar from '../../presentational/Navbar/AnnouncementBar';
import LogoBar from '../../presentational/Navbar/LogoBar';
import TopNavContainer from './TopNavContainer';
import SubNavBar from '../../presentational/Navbar/SubNavBar';

class NavContainer extends Component {
    render() {
        return (
            <>
                <NavbarLayout
                    announcement={<AnouncementBar text="announcement.text" loc="announce"/>}
                    logo={<LogoBar loc="logo"/>}
                    topNav={<TopNavContainer loc="topNav"/>}
                    subNav={<SubNavBar loc="subNav"/>}
                    {...this.props}
                />      
            </>
        );
    }
}

export default NavContainer;