const MoltinGateway = require('@moltin/sdk').gateway
 
const Moltin = MoltinGateway({
  client_id: process.env.MOLTIN_CLIENT_ID,
  client_secret: process.env.MOLTIN_CLIENT_SECRET
})

module.exports = {
    submitOrder: async (req, res, next) => {
        const { customerId, shipping_address, billing_address } = req.body;
        try {
          console.log('API ORDER SUBMITTING----------', {customerId, shipping_address, billing_address} );
          const order = await Moltin.Cart().Checkout(customerId, shipping_address, billing_address);
          console.log('API RESPONSE SUBMIT ORDER----------', order);
          res.json(order);
        } catch (err) {
          console.log(err);
        }
      },
    finalizeOrder: async (req, res, next) => {
      console.log(req.body);
      const { id } = req.body
      try {
        console.log('FINALIZING ORDER----------', req.body );
        const transaction = await Moltin.Orders.Payment(id, {gateway: 'manual', method: 'authorize'});
        const capture = await Moltin.Transactions.Capture({ order: id, transaction: transaction.data.id });
        res.json(capture);
      } catch (err) {
        console.log(err);
      }
    },
}