import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartItems, getAllCartItems, getCartDiscount, getCartSubtotal,removeItem, updateItem, applyPromo } from '../../../ducks/cart';
import { getOrderTotal, getOrderTax, getShippingCosts } from '../../../ducks/checkout';

import Cart from '../../presentational/Cart/Cart';

class CartContainer extends Component {
    render() {
        const { cartItems, removeItem, updateItem, applyPromo, total, subTotal, shipping, taxes, discount } = this.props;
        return (
                <Cart 
                    removeFromCart={removeItem}
                    updateCartItem={updateItem}
                    items={cartItems}
                    cart={{total, discount, subTotal, shipping, taxes}}
                    apply={applyPromo}
                />
        );
    }
}

function mapStateToProps(state) {
    return {
        cartItems: getAllCartItems(state),
        total: getOrderTotal(state),
        subTotal: getCartSubtotal(state),
        discount: getCartDiscount(state),
        shipping: getShippingCosts(state),
        taxes: getOrderTax(state)
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