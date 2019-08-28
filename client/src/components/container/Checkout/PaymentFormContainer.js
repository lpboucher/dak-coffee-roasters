import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { injectStripe } from 'react-stripe-elements';
import { Redirect } from 'react-router-dom';
import { getSubscriptionProducts } from '../../../ducks/products';
import { getOrderTotal } from '../../../ducks/checkout';
import { getUserID, getUserPaymentMethod } from '../../../ducks/user';
import { submitPayment, getStatus } from '../../../ducks/payments';
import { isProcessing } from '../../../ducks/views';

import PaymentForm from '../../presentational/Checkout/Form/PaymentForm';

class PaymentFormContainer extends Component {

    submitPayment = async ({payment_method_id, payment_intent_id}) => {
        const { submit, amount, subProducts, customer } = this.props;
        const subscription = subProducts.length > 0 ? 
        { 
          has_recurring: true,
          plans: subProducts.map(product => ({ plan: product.stripe_plan_id, quantity: product.quantity }))
        } : {};
        await submit(
            { payment_method_id: payment_method_id,
              payment_intent_id: payment_intent_id,
              order_amount: amount,
              customer: customer,
            },
            subscription
        )
    }
    generateToken = async (e, element) => {
        const { stripe } = this.props;
        e.preventDefault();
        if (stripe) {
          const res = await stripe.createPaymentMethod('card', element);
          await this.submitPayment({payment_method_id: res.paymentMethod.id})
        } else {
          console.log("Stripe.js hasn't loaded yet.");
        }
      };

    handleConfirmation = async (status) => {
        const { stripe } = this.props;
        if (stripe) {
          const res = await stripe.handleCardAction(status.secret);
          await this.submitPayment({payment_intent_id: res.paymentIntent.id})
        } else {
          console.log("Stripe.js hasn't loaded yet.");
        }
      };

    renderPaymentForm() {
        const { order, isProcessing } = this.props;
        return (
            <PaymentForm processing={isProcessing} submit={this.generateToken} order={order}/>
        )}

    render() {
        const { status } = this.props;
        if (status.success) {return <Redirect to="/checkout/success" />};
        if (status.action) {this.handleConfirmation(status)};
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
        isProcessing: isProcessing(state),
        subProducts: getSubscriptionProducts(state),
        amount: getOrderTotal(state),
        customer: {
            id: getUserID(state),
            default_payment: getUserPaymentMethod(state)
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        submit: (id, token) => dispatch(submitPayment(id, token)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(injectStripe(PaymentFormContainer));