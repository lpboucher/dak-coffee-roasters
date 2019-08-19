const MoltinGateway = require('@moltin/sdk').gateway
const tax = require('../utils/taxes');
const isoCodes = require('../utils/countryCodes');
const shipping = require('../utils/shippingCost');
 
const Moltin = MoltinGateway({
  client_id: process.env.MOLTIN_CLIENT_ID,
  client_secret: process.env.MOLTIN_CLIENT_SECRET
})

module.exports = {
    submitOrder: async (req, res, next) => {
        const { customerId, shipping_address, billing_address, items, total } = req.body;
        const { country, county, postcode } = shipping_address;
        try {
          console.log('API ORDER SUBMITTING----------', {customerId, shipping_address, billing_address, items, total} );
          const country_code = isoCodes.getCountryCode(country);
          const shipCosts = shipping.calculateShipping(country_code, total.without_tax, items);
          console.log(shipCosts)
          const taxes = await tax.addTaxes(
            { country_code, county, postcode },
            total.without_tax.amount,
            shipCosts,
            items
          );
          console.log(taxes);
          /*const order = await Moltin.Cart().Checkout(customerId, shipping_address, billing_address);
          console.log('API RESPONSE SUBMIT ORDER----------', order);
          res.json(order);*/
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