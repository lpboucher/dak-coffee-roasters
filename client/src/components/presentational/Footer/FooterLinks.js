import React from 'react';
import { Link } from 'react-router-dom';

import { FOOTER_NAV } from '../../../constants/Navigation';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FooterLinks = () => {
    return (
        <Row className="d-flex">
            { FOOTER_NAV.map(item => 
                <Col md={4}>
                    <Link to={item.link}>{item.menuText}</Link>
                </Col>
            )}
        </Row>
    );
};

export default FooterLinks;