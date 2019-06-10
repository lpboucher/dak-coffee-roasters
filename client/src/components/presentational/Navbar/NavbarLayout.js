import React, { Fragment } from 'react';

import './Navbar.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavbarLayout = ({logo, topNav, subNav}) => {
    return (
    <Fragment>
        <Navbar className="bg-white" sticky="top">
            <Row style={{width: '100%'}} className="pt-2 align-items-center text-uppercase small spaced">
                <Col md={{offset: 3}} className="text-center">
                    <Navbar.Brand>
                        {logo}
                    </Navbar.Brand>
                </Col>
                <Col md="auto" className="justify-content-end">
                    <Nav>
                        {topNav}
                    </Nav>
                </Col>
            </Row>
        </Navbar>
        <Container>
            <Nav className="justify-content-around p-3 mb-3 border-bottom border-dark text-uppercase small spaced" activeKey="/home">
                {subNav}
            </Nav>
        </Container>
    </Fragment>
    );
};

export default NavbarLayout;