import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

const NAV_LINKS = [
    { menuText: "shop", link: "/shop"},
    { menuText: "coffee subscriptions", link: "/subscriptions"},
    { menuText: "who we are", link: "/about"},
    { menuText: "wholesale", link: "/wholesale"},
    { menuText: "get in touch", link: "/contact"},
    { menuText: "blog", link: "/blog"}
]

const SubNavbar = () => {
    return (
        <Fragment>
            { NAV_LINKS.map(item => (
                <Nav.Item key={item.menuText.replace(/\s+/g, '')}>
                    <Link to={item.link}>{item.menuText}</Link>
                </Nav.Item>
            ))}
        </Fragment>
    );
};

export default SubNavbar;