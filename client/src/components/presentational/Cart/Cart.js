import React, { Fragment } from 'react';

import CartItem from './CartItem';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Cart = ({items, removeFromCart, updateCartItem}) => {
    return (
        <Fragment>
            <Container>
                <Row className="align-items-center py-5">
                    <i className="fas fa-chevron-left px-3"></i>
                    <p>Continue Shopping</p>
                </Row>
                {items.map(item => <CartItem key={item.id} update={updateCartItem} remove={removeFromCart} {...item}/>)}
            </Container>
        </Fragment>
    );
};

export default Cart;