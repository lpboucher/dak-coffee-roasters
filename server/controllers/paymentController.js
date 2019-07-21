const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = {
      submitPayment: async (req, res, next) => {
        try {
          let intent;
          if (req.body.payment_method_id) {
            intent = await stripe.paymentIntents.create({
              payment_method: req.body.payment_method_id,
              amount: 1099,
              currency: 'eur',
              confirmation_method: 'manual',
              confirm: true
            });
          } else if (req.body.payment_intent_id) {
            intent = await stripe.paymentIntents.confirm(
              req.body.payment_intent_id
            );
          }
          res.send(generate_payment_response(intent));
        } catch (e) {
          return res.send({ error: e.message });
        }
      },
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
      success: true
    };
  } else {
    return {
      error: 'Invalid PaymentIntent status'
    }
  }
};