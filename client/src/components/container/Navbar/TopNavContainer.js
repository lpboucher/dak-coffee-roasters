import React, { Component, createRef, Fragment } from 'react';
import { connect } from 'react-redux';
import { isCartOpen, openCartToolTip, closeCartToolTip } from '../../../ducks/views';
import { fetchCartItems, getAllCartItems, getNumberInCart } from '../../../ducks/cart';
import { getLoggedStatus, logout } from '../../../ducks/user';

import Account from '../../presentational/Navbar/Account';
import CartCounter from '../../presentational/Navbar/CartCounter';

class TopNavContainer extends Component {
    cartRef = createRef();
    
    componentDidMount() {
        this.props.fetchCart();
    }

    render() {
        const { cartItems, quantity, isOpen, openCart, closeCart, isUserLoggedIn, logout } = this.props;
        return (
            <Fragment>
                <Account loggedIn={isUserLoggedIn} logout={logout}/>
                <CartCounter 
                    items={cartItems}
                    quantity={quantity}
                    isOpen={isOpen}
                    open={openCart}
                    close={closeCart}
                    cartRef={this.cartRef}/>
                <p>EUR</p>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        isOpen: isCartOpen(state),
        cartItems: getAllCartItems(state),
        quantity: getNumberInCart(state),
        isUserLoggedIn: getLoggedStatus(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCart: () => dispatch(fetchCartItems()),
        openCart: () => dispatch(openCartToolTip()),
        closeCart: () => dispatch(closeCartToolTip()),
        logout: () => dispatch(logout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNavContainer);