import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { orderExists } from '../../../ducks/checkout';
import { getLoggedStatus } from '../../../ducks/user';
import { getAllProducts } from '../../../ducks/products';

import CheckoutForm from '../../presentational/Checkout/Form/CheckoutForm';

class CheckoutFormContainer extends Component {

    renderCheckoutForm() {
        return <CheckoutForm {...this.props}/>
      }

    render() {
        return (
            <Fragment>
                {this.renderCheckoutForm()}
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        isUserLoggedIn: getLoggedStatus(state),
        orderExists: orderExists(state),
        products: getAllProducts(state)
    };
}

export default connect(mapStateToProps,null)(CheckoutFormContainer);