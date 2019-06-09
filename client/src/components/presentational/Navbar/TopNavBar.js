import React from 'react';
import { Link } from 'react-router-dom';

import CartCounter from '../../container/Navbar/CartCounter';

import Logo from '../../utils/Logo';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Navbar.css';

const TopNavBar = () => {
    return (
    <Navbar className="bg-white" sticky="top">
        <Row style={{width: '100%'}} className="pt-2 align-items-center text-uppercase small spaced">
            <Col md={{offset: 3}} className="text-center">
                <Navbar.Brand>
                    <Link to="/">
                        <Logo width="150px" />
                    </Link>
                </Navbar.Brand>
            </Col>
            <Col md="auto" className="justify-content-end">
                <Nav>
                    <Link className="px-3" to="/account">
                        <i className="fas fa-user-circle"></i> My Account
                    </Link>
                    <CartCounter />
                </Nav>
            </Col>
        </Row>
    </Navbar>
    );
};

export default TopNavBar;
