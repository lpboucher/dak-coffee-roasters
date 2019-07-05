import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SubscriptionCharacteristicsItem = ({icon, text}) => {
    return (
        <Row>
            <Col md={1}>
                <i className={`fas ${icon}`}></i>
            </Col>
            <Col md={11}>
                <p>{text}</p>
            </Col>
        </Row>
    );
};

export default SubscriptionCharacteristicsItem;