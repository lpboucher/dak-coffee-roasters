import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CheckoutLayout = ({leftCol, rightCol}) => {
    return (
        <Container>
            <Row>
                <Col className="border-right">
                    {leftCol}
                </Col>
                <Col>
                    {rightCol}
                </Col>
            </Row>
        </Container>
    );
};

export default CheckoutLayout;