import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CheckoutSummaryPrices = ({display_price}) => {
    return (
        <div className="m-5 text-right">
            <div className="pb-4">
                <Row>
                    <Col md={8}>Subtotal</Col>
                    <Col md={4}>{display_price.without_tax.formatted}</Col>
                </Row>
                <Row>
                    <Col md={8}>Shipping From</Col>
                    <Col md={4}>Free</Col>
                </Row>
                <Row>
                    <Col md={8}>VAT 21%</Col>
                    <Col md={4}>{display_price.tax.formatted}</Col>
                </Row>
                <Row>
                    <Col md={8}>Discount</Col>
                    <Col md={4}>$ 3</Col>
                </Row>
                <Row>
                    <Col md={8}>Total Including Taxes</Col>
                    <Col md={4}>{display_price.with_tax.formatted}</Col>
                </Row>
            </div>
            <Button variant="dark">Place My Order</Button>
        </div>
    );
};

export default CheckoutSummaryPrices;