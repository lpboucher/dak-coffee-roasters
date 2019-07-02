import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import { SUB_NAV } from '../../../constants/Navigation';

const SubNavbar = () => {
    return (
        <Fragment>
            { SUB_NAV.map(item => (
                <Nav.Item key={item.menuText.replace(/\s+/g, '')}>
                    <NavLink activeStyle={{textDecoration: 'line-through', textDecorationColor: 'var(--darkHighlight)'}} to={item.link}>{item.menuText}</NavLink>
                </Nav.Item>
            ))}
        </Fragment>
    );
};

export default SubNavbar;