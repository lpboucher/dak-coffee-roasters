import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Elements, injectStripe } from 'react-stripe-elements';
import { Redirect } from 'react-router-dom';
import { getOrder } from '../../../ducks/checkout';
import { submitPayment, getStatus } from '../../../ducks/payments';
import { isProcessing } from '../../../ducks/views';

import Loader from '../../utils/Loader';

import PaymentForm from '../../presentational/Checkout/Form/PaymentForm';

class PaymentFormContainer extends Component {

    /*.then(function(confirmResult) {
              return confirmResult.json();
            }).then();
    }*/

    generateToken = async (e, element) => {
        const { stripe, submit } = this.props;
        e.preventDefault();
        if (stripe) {
          const res = await stripe.createPaymentMethod('card', element);
          console.log(res)
          await submit({ payment_method_id: res.paymentMethod.id })
        } else {
          console.log("Stripe.js hasn't loaded yet.");
        }
      };
    
    handleConfirmation() {
        const { status, stripe, submit } = this.props;
        stripe.handleCardAction(status.secret).then((res) => {
            submit({ payment_intent_id: res.paymentIntent.id });
        })
    }

    renderPaymentForm() {
        const { order, isProcessing } = this.props;
        return (
            <PaymentForm processing={isProcessing} submit={this.generateToken} order={order}/>
        )}

    render() {
        const { status } = this.props;
        if (status.success) {return <Redirect to="/checkout/sucess" />};
        if (status.action) {this.handleConfirmation()};
        return (
            <Fragment>
                {this.renderPaymentForm()}
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        status: getStatus(state),
        isProcessing: isProcessing(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //payOrder: (id, data) => dispatch(payOrder(id, data)),
        submit: (id, token) => dispatch(submitPayment(id, token)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(injectStripe(PaymentFormContainer));