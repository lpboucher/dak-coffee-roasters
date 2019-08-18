import React, { Component, createRef, Fragment } from 'react';
import { connect } from 'react-redux';
import { isCartOpen, openCartToolTip, closeCartToolTip } from '../../../ducks/views';
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
        isUserLoggedIn: getLoggedStatus(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCart: () => dispatch(fetchCartItems()),
        openCart: () => dispatch(openCartToolTip()),
        closeCart: () => dispatch(closeCartToolTip()),
        logout: () => dispatch(logout()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNavContainer);