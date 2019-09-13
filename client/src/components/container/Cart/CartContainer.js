import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCartItems, getAllCartItems, getCartDiscount, getCartSubtotal,removeItem, updateItem, applyPromo } from '../../../ducks/cart';
import { getOrderTotal, getOrderTax, getShippingCosts } from '../../../ducks/checkout';
import { getError } from '../../../ducks/views';

import Cart from '../../presentational/Cart/Cart';

class CartContainer extends Component {
    render() {
        const { cartItems, removeItem, updateItem, applyPromo, total, subTotal, shipping, taxes, discount, error } = this.props;
        if (cartItems.length < 1) {
            return <Redirect to="/shop" />
        } else {
            return <Cart 
                    removeFromCart={removeItem}
                    updateCartItem={updateItem}
                    items={cartItems}
                    cart={{total, discount, subTotal, shipping, taxes}}
                    apply={applyPromo}
                    error={error}
                />
        }
    }
}

function mapStateToProps(state) {
    return {
        cartItems: getAllCartItems(state),
        total: getOrderTotal(state),
        subTotal: getCartSubtotal(state),
        discount: getCartDiscount(state),
        shipping: getShippingCosts(state),
        taxes: getOrderTax(state),
        error: getError(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCart: () => dispatch(fetchCartItems()),
        removeItem: (id) => dispatch(removeItem(id)),
        updateItem: (id, quantity) => dispatch(updateItem(id, quantity)),
        applyPromo: (code) => dispatch(applyPromo(code))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);