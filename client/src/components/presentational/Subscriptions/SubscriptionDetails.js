import React from 'react';

import SubscriptionCard from './SubscriptionCard';
import SubscriptionForm from './Form/SubscriptionForm';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SubscriptionDetails = ({cart, products}) => {
    return (
        <Container fluid className="p-5 bg-white">
            <Row className="d-flex align-content-stretch">
                {products.map(product => 
                    <Col key={product.product.id} md={6} className="d-flex flex-column p-5">
                        <SubscriptionCard {...product} />
                        <SubscriptionForm />
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default SubscriptionDetails;