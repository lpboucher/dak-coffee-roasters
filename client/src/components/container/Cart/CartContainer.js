import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartItems, getAllCartItems, getAllCartMeta, removeItem, updateItem } from '../../../ducks/cart';

import Cart from '../../presentational/Cart/Cart';

class CartContainer extends Component {

    componentDidMount() {
        this.props.fetchCart();
    }

    render() {
        const { cartItems, cartMeta, removeItem, updateItem } = this.props;
        return (
                <Cart 
                    removeFromCart={removeItem}
                    updateCartItem={updateItem}
                    items={cartItems}
                    cart={cartMeta}
                />
        );
    }
}

function mapStateToProps(state) {
    return {
        cartItems: getAllCartItems(state),
        cartMeta: getAllCartMeta(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCart: () => dispatch(fetchCartItems()),
        removeItem: (id) => dispatch(removeItem(id)),
        updateItem: (id, quantity) => dispatch(updateItem(id, quantity))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);