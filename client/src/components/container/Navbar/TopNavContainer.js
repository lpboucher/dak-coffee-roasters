import React, { Component, createRef, Fragment } from 'react';
import { connect } from 'react-redux';
import { isCartOpen, openCartToolTip, closeCartToolTip, openMobileMenu, closeMobileMenu, isMobileOpen, switchDisplayCurrency, getDisplayCurrency } from '../../../ducks/views';
import { fetchCartItems, getAllCartItems, getNumberInCart } from '../../../ducks/cart';
import { getLoggedStatus, logout } from '../../../ducks/user';

import TopNavBar from '../../presentational/Navbar/TopNavBar';

class TopNavContainer extends Component {
    cartRef = createRef();
    
    componentDidMount() {
        this.props.cartItems.map(item => new Image().src = item.image.href);
    }

    render() {
        return (
            <Fragment>
                <TopNavBar cartRef={this.cartRef} {...this.props}/>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        isOpen: isCartOpen(state),
        cartItems: getAllCartItems(state),
        quantity: getNumberInCart(state),
        isUserLoggedIn: getLoggedStatus(state),
        isMobileOpen: isMobileOpen(state),
        displayCurrency: getDisplayCurrency(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCart: () => dispatch(fetchCartItems()),
        openCart: () => dispatch(openCartToolTip()),
        closeCart: () => dispatch(closeCartToolTip()),
        openMenu: () => dispatch(openMobileMenu()),
        closeMenu: () => dispatch(closeMobileMenu()),
        switchCurrency: (currency) => dispatch(switchDisplayCurrency(currency)),
        logout: () => dispatch(logout()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNavContainer);