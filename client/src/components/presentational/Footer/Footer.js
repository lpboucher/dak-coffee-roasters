import React, { Fragment } from 'react';

import FooterDescription from './FooterDescription';
import FooterLinks from './FooterLinks';
import FooterDisclaimer from './FooterDisclaimer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <Fragment>
            <Container fluid className="p-5 bg-light">
                <Row>
                    <Col md={{span: 4, offset: 1}}>
                        <FooterDescription />
                    </Col>
                    <Col md={7}>
                        <FooterLinks />
                    </Col>
                </Row>
            </Container>
            <FooterDisclaimer />
        </Fragment>
    );
};

export default Footer;