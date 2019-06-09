import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isCartOpen, openCartToolTip, closeCartToolTip } from '../../../ducks/views';
import { fetchCartItems, getAllCartItems, getNumberInCart } from '../../../ducks/cart';

import CartToolTip from '../../presentational/Cart/CartToolTip';

class CartCounter extends Component {
    
    componentDidMount() {
        this.props.fetchCart();
    }

    render() {
        const { cartItems, quantity, isOpen, openCart, closeCart } = this.props;
        return (
            <div
                onMouseEnter={() => openCart()}
                onMouseLeave={() => closeCart()}
                aria-controls="example-collapse-text"
                aria-expanded={isOpen}
            >
                <Link to="/cart" className="px-3 cart-trigger">
                    <i className="fas fa-shopping-cart"></i> 
                    {quantity ? `(${quantity})` : `(0)`}
                </Link>
                <CartToolTip items={cartItems} show={isOpen}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isOpen: isCartOpen(state),
        cartItems: getAllCartItems(state),
        quantity: getNumberInCart(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCart: () => dispatch(fetchCartItems()),
        openCart: () => dispatch(openCartToolTip()),
        closeCart: () => dispatch(closeCartToolTip()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);