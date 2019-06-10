import React, {Fragment} from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const CartItem = ({
    id,
    image,
    name,
    description,
    unit_price,
    quantity,
    value,
    remove,
    update}) => {
    return (
        <Fragment>
            <Row className="align-items-center justify-content-between no-gutters py-3">
                <Col md={1} className="text-center">
                    <i onClick={() => remove(id)} className="far fa-times-circle"></i>
                </Col>
                <Col md={3} className="text-center">
                    <Image src={image.href} fluid/>
                </Col>
                <Col md={3}>
                    <p>Item type</p>
                    <p>{name}</p>
                    <p>{description}</p>
                    <p>Product spec</p>
                </Col>
                <Col md={2} className="text-center">
                    <p>{`${unit_price.amount / 100} ${unit_price.currency}`}</p>
                </Col>
                <Col md={2} className="text-center">
                    <button onClick={() => update(id, quantity + 1)}>+</button>
                    <p>{quantity}</p>
                    <button onClick={() => update(id, quantity - 1)}>-</button>
                </Col>
                <Col md={1}>
                    <p>{`${value.amount / 100} ${value.currency}`}</p>
                </Col>
            </Row>
            <hr/>
        </Fragment>
    );
};

export default CartItem;