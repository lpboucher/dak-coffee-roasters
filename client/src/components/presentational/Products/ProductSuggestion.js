import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductSuggestion = () => {
    return (
    <Container>
        <h5 class="section-title h1">OUR TEAM</h5>
        <Row class="row-eq-height">
            <Col md={4}>
                product one
            </Col>
            <Col md={4}>
                product two
            </Col>
            <Col md={4}>
                product three
            </Col>
        </Row>
    </Container>
    );
};

export default ProductSuggestion;