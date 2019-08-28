const MoltinGateway = require('@moltin/sdk').gateway
const tax = require('../utils/taxes');
const isoCodes = require('../utils/countryCodes');
const shipping = require('../utils/shippingCost');
const emails = require('../utils/emails');
 
const Moltin = MoltinGateway({
  client_id: process.env.MOLTIN_CLIENT_ID,
  client_secret: process.env.MOLTIN_CLIENT_SECRET
})

module.exports = {
    submitOrder: async (req, res, next) => {
        const { customerId, shipping_address, billing_address, items, total } = req.body;
        const { country, county, postcode } = shipping_address;
        const moltinHeaders = {
            client_id: process.env.MOLTIN_CLIENT_ID,
            client_secret: process.env.MOLTIN_CLIENT_SECRET,
            currency: total.without_tax.currency
        }
        try {
          console.log('API ORDER SUBMITTING----------', {customerId, shipping_address, billing_address, items, total} );
          const existingShipping = items.find(item => item.name === "shipping");
          const country_code = isoCodes.getCountryCode(country);
          const shipCosts = shipping.calculateShipping(country_code, total.without_tax, items);
          const taxes = await tax.addTaxes(
            { country_code, county, postcode },
            total.without_tax.amount,
            shipCosts,
            items
          );
          if(existingShipping && existingShipping.unit_price.amount !== shipCosts * 100) {
            await MoltinGateway(moltinHeaders).Cart().RemoveItem(existingShipping.id);
          } else if (!existingShipping) {
            await MoltinGateway(moltinHeaders).Cart().AddCustomItem({name: "shipping", quantity: 1, price: {amount: shipCosts * 100}});
          }
          const order = await MoltinGateway(moltinHeaders).Cart().Checkout(customerId, shipping_address, billing_address);
          console.log('API RESPONSE SUBMIT ORDER----------', order);
          console.log(taxes)
          res.json({order, taxes});
        } catch (err) {
          console.log(err);
        }
      },
    finalizeOrder: async (req, res, next) => {
      const { order, lang } = req.body;
      try {
        console.log('FINALIZING ORDER----------', req.body );
        const transaction = await Moltin.Orders.Payment(id, {gateway: 'manual', method: 'authorize'});
        const capture = await Moltin.Transactions.Capture({ order: id, transaction: transaction.data.id });
        emails.newOrderEmail(order.customer.email, order, lang);
        res.json(capture);
      } catch (err) {
        console.log(err);
      }
    },
}