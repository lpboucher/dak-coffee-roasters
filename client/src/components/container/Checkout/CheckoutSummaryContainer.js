import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllCartItems, getCartDiscount, getCartSubtotal } from '../../../ducks/cart';
import { getOrderTotal, getOrderTax, getShippingCosts } from '../../../ducks/checkout';

import Loader from '../../utils/Loader';

import CheckoutSummary from '../../presentational/Checkout/CheckoutSummary';

class CheckoutSummaryContainer extends Component {

    renderCheckout() {
        const { cartItems, total, discount, shipping, subTotal, taxes } = this.props;
        if(cartItems && cartItems.length > 0) {return <CheckoutSummary items={cartItems} cart={{total, discount, shipping, subTotal, taxes}}/>};

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
        total: getOrderTotal(state),
        subTotal: getCartSubtotal(state),
        discount: getCartDiscount(state),
        shipping: getShippingCosts(state),
        taxes: getOrderTax(state)
    };
}

export default connect(mapStateToProps,null)(CheckoutSummaryContainer);