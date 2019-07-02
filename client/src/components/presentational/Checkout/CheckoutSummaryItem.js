import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const CheckoutSummaryItem = ({name, description, image}) => {
    return (
        <Row>
            <Col md={4}>
                <Image fluid src={image.href} alt=''/>
            </Col>
            <Col md={8}>
                <p>{name}</p>
                <p>{description}</p>
            </Col>
        </Row>
        
    );
};

export default CheckoutSummaryItem;