import React, { Fragment } from 'react';

import CartItem from './CartItem';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import OrderSummaryPrices from './OrderSummaryPrices';
import ProductSuggestion from '../Products/ProductSuggestion';

const Cart = ({items, cart, removeFromCart, updateCartItem}) => {
    return (
        <Fragment>
            <Container>
                <Row className="align-items-center pt-5">
                    <i className="fas fa-chevron-left px-3"></i>
                    <p>Continue Shopping</p>
                </Row>
                {items.map(item => 
                    <CartItem 
                        key={item.id}
                        update={updateCartItem}
                        remove={removeFromCart}
                        {...item}
                    />
                )}
            <OrderSummaryPrices {...cart}/>
            </Container>
            <ProductSuggestion />
        </Fragment>
    );
};

export default Cart;