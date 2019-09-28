const MoltinGateway = require('@moltin/sdk').gateway
const MemStorage = require('@moltin/sdk').MemoryStorageFactory
const tax = require('../utils/taxes');
const isoCodes = require('../utils/countryCodes');
const shipping = require('../utils/shippingCost');
const emails = require('../utils/emails');

const config = {
  client_id: process.env.MOLTIN_CLIENT_ID,
  client_secret: process.env.MOLTIN_CLIENT_SECRET,
}

const withStorage = {
  ...config,
  storage: new MemStorage()
}

module.exports = {
    submitOrder: async (req, res, next) => {
        const { customerId, shipping_address, billing_address, items, total } = req.body;
        const { country, county, postcode } = shipping_address;
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
            await MoltinGateway({...withStorage, currency: total.without_tax.currency}).Cart().RemoveItem(existingShipping.id);
          } else if (!existingShipping) {
            await MoltinGateway({...withStorage, currency: total.without_tax.currency}).Cart().AddCustomItem({name: "shipping", quantity: 1, price: {amount: shipCosts * 100}});
          }
          const order = await MoltinGateway({...withStorage, currency: total.without_tax.currency}).Cart().Checkout(customerId, shipping_address, billing_address);
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
        const transaction = await Moltin.Orders.Payment(order.id, {gateway: 'manual', method: 'authorize'});
        const capture = await Moltin.Transactions.Capture({ order: order.id, transaction: transaction.data.id });
        emails.newOrderEmail(order.customer.email, order, lang);
        res.json(capture);
      } catch (err) {
        console.log(err);
      }
    },
}