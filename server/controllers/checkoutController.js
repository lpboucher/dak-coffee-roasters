const tax = require('../utils/taxes');
const isoCodes = require('../utils/countryCodes');
const shipping = require('../utils/shippingCost');
const emails = require('../utils/emails');

module.exports = {
    submitOrder: async (req, res, next) => {
        const Moltin = req.app.locals.moltin;
        const { customerId, shipping_address, billing_address, items, total } = req.body;
        const { country, county, postcode } = shipping_address;
        req.app.locals.moltin.config.currency = total.without_tax.currency;
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
            await Moltin.Cart().RemoveItem(existingShipping.id);
          } else if (!existingShipping) {
            await Moltin.Cart().AddCustomItem({name: "shipping", quantity: 1, price: {amount: shipCosts * 100}});
          }
          const order = await Moltin.Cart().Checkout(customerId, shipping_address, billing_address);
          console.log('API RESPONSE SUBMIT ORDER----------', order.included);
          console.log(taxes)
          res.json({order, taxes});
        } catch (err) {
          console.log(err);
        }
      },
    finalizeOrder: async (req, res, next) => {
      const Moltin = req.app.locals.moltin;
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