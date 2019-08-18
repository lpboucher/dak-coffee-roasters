import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import throttle from 'lodash.throttle';
import { handleScroll, isMiniHeader } from '../../../ducks/views';

import NavbarLayout from '../../presentational/Navbar/NavbarLayout';
import AnouncementBar from '../../presentational/Navbar/AnnouncementBar';
import LogoBar from '../../presentational/Navbar/LogoBar';
import TopNavContainer from './TopNavContainer';
import SubNavBar from '../../presentational/Navbar/SubNavBar';

class NavContainer extends Component {
    
    componentDidMount() {
        window.addEventListener("scroll", throttle(this.props.handleScroll, 500, { leading: true, trailing: true}));
    }
      
    componentWillUnmount() {
    window.removeEventListener("scroll", this.props.handleScroll);
    }

    render() {
        return (
            <Fragment>
                <NavbarLayout
                    announcement={<AnouncementBar text="free shipping" loc="announce"/>}
                    logo={<LogoBar loc="logo"/>}
                    topNav={<TopNavContainer loc="topNav"/>}
                    subNav={<SubNavBar loc="subNav"/>}
                    {...this.props}
                />      
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        show: !isMiniHeader(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleScroll: () => dispatch(handleScroll()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);