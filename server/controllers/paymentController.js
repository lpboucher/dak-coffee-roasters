const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = {
      submitPayment: async (req, res, next) => {
        const { payment_method_id, payment_intent_id, order_amount, customer } = req.body;
        try {
          let intent;
          if (payment_method_id) {
            intent = await stripe.paymentIntents.create({
              payment_method: payment_method_id,
              customer: customer.id,
              amount: order_amount.with_tax.amount,
              currency: order_amount.with_tax.currency,
              confirmation_method: 'manual',
              confirm: true,
              setup_future_usage: 'off_session',
            });
          } else if (payment_intent_id) {
            intent = await stripe.paymentIntents.confirm(
              payment_intent_id
            );
          }
          res.send(generate_payment_response(intent));
        } catch (e) {
          return res.send({ error: e.message });
        }
      },
      addSubscription: async (req, res, next) => {
        const { customer, plans, payment_method } = req.body;
        let default_payment;
        if(Object.entries(customer.default_payment).length === 0 && customer.default_payment.constructor === Object) { 
          default_payment = await stripe.paymentMethods.attach(payment_method, {customer: customer.id});
        } else {
          default_payment = customer.default_payment
        }
        const subscription = await stripe.subscriptions.create({
          customer: customer.id,
          items: plans,
          default_payment_method: default_payment.id,
          trial_period_days: 30,
        });
        res.send(subscription);
      }
    }

const generate_payment_response = (intent) => {
  if (
    intent.status === 'requires_action' &&
    intent.next_action.type === 'use_stripe_sdk'
  ) {
    return {
      requires_action: true,
      payment_intent_client_secret: intent.client_secret
    };
  } else if (intent.status === 'succeeded') {
    return {
      success: true,
      payment_method: intent.payment_method
    };
  } else {
    return {
      error: 'Invalid PaymentIntent status'
    }
  }
};