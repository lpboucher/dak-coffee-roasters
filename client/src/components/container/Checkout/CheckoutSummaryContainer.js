import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCartItems, getAllCartItems, getAllCartMeta } from '../../../ducks/cart';

import Loader from '../../utils/Loader';

import CheckoutSummary from '../../presentational/Checkout/CheckoutSummary';

class CheckoutSummaryContainer extends Component {

    componentDidMount() {
        this.props.fetchCart();
    }

    renderCheckout() {
        const { cartItems, cartMeta } = this.props;
        if(cartItems && cartItems.length > 0) {return <CheckoutSummary items={cartItems} cart={cartMeta}/>};

        return <Loader />
      }

    render() {
        return (
            <Fragment>
                {this.renderCheckout()}
            </Fragment>
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
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutSummaryContainer);