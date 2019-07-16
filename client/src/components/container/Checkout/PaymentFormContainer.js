import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
//import { payOrder } from '../../../ducks/payments';
import { submitOrder } from '../../../ducks/checkout';

import Loader from '../../utils/Loader';

import PaymentForm from '../../presentational/Checkout/Form/PaymentForm';

class OrderFormContainer extends Component {

    renderPaymentForm() {
        const { submit } = this.props;
        return <PaymentForm submit={submit}/>
      }

    render() {
        return (
            <Fragment>
                {this.renderPaymentForm()}
            </Fragment>
        );
    }
}

/*function mapStateToProps(state) {
    return {
        cartItems: getAllCartItems(state),
        cartMeta: getAllCartMeta(state)
    };
}*/

function mapDispatchToProps(dispatch) {
    return {
        //payOrder: (id, data) => dispatch(payOrder(id, data)),
        submit: (id, data) => dispatch(submitOrder(id, data)),
    };
}

export default connect(null,mapDispatchToProps)(OrderFormContainer);