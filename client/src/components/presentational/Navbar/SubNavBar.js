import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

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
            <Container>
                <Nav className="justify-content-around p-3 mb-3 border-bottom border-dark text-uppercase small spaced" activeKey="/home">
                    { NAV_LINKS.map(item => (
                        <Nav.Item key={item.menuText.replace(/\s+/g, '')}>
                            <Link to={item.link}>{item.menuText}</Link>
                        </Nav.Item>
                    ))}
                </Nav>
            </Container>
        </Fragment>
    );
};

export default SubNavbar;