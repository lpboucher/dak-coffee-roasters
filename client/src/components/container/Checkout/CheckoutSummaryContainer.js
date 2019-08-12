import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllCartItems, getCartTotal, getCartDiscount } from '../../../ducks/cart';

import Loader from '../../utils/Loader';

import CheckoutSummary from '../../presentational/Checkout/CheckoutSummary';

class CheckoutSummaryContainer extends Component {

    renderCheckout() {
        const { cartItems, total, discount } = this.props;
        if(cartItems && cartItems.length > 0) {return <CheckoutSummary items={cartItems} cart={{total, discount}}/>};

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
        total: getCartTotal(state),
        discount: getCartDiscount(state)
    };
}

export default connect(mapStateToProps,null)(CheckoutSummaryContainer);