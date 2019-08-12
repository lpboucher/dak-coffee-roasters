import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartItems, getAllCartItems, getCartTotal, getCartDiscount, removeItem, updateItem, applyPromo } from '../../../ducks/cart';

import Cart from '../../presentational/Cart/Cart';

class CartContainer extends Component {
    render() {
        const { cartItems, removeItem, updateItem, applyPromo, total, discount } = this.props;
        return (
                <Cart 
                    removeFromCart={removeItem}
                    updateCartItem={updateItem}
                    items={cartItems}
                    cart={{total, discount}}
                    apply={applyPromo}
                />
        );
    }
}

function mapStateToProps(state) {
    return {
        cartItems: getAllCartItems(state),
        total: getCartTotal(state),
        discount: getCartDiscount(state)
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