const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const emails = require('../utils/emails');

module.exports = {
    login: async (req, res, next) => {
        const Moltin = req.app.locals.moltin;
        const { email, password } = req.body;
        let user;
        try {
            user = await Moltin.Customers.Token(email, password);
        } catch (err) {
          return res.json({error: err.errors[0].detail});
        }
        res.json(user);
      },
    register: async (req, res, next) => {
      const Moltin = req.app.locals.moltin;
      const { name, email, password, language } = req.body;
      let user;
      try {
        user = await Moltin.Customers.Create({ name, email });
      } catch (err) {
        return res.json({error: err.errors[0].detail});
      }
      stripe.customers.create({
        description: `Test customer for ${email}`,
        name,
        email,
      }, async (err, customer) => {
        try {
          const newUser = await Moltin.Customers.Update(user.data.id, { name, email, password, stripe_id: customer.id });
          emails.newUserEmail(email, language)
          res.json(newUser);
        } catch (err) {
          console.log(err)
        } 
      });
      },
      getUser: async (req, res, next) => {
        const Moltin = req.app.locals.moltin;
        const { id } = req.params;
        try {
          if (id.substr(0, 3) === 'cus') {
            stripe.customers.retrieve(
              id, 
              (err, customer) => {
                res.json(customer);
              }
            );
          } else {
            const customer = await Moltin.Customers.Get(id);
            res.json(customer);
          }
        } catch (err) {
          console.log(err)
        }
      },
      updateUser: (req, res, next) => {
        const { id } = req.params;
        stripe.customers.update(
          id,
          req.body,
          async (err, customer) => {
            await res.json(customer);
            console.log('API LOGGING UPDATED CUSTOMER----------', customer);
          }
        );
      },
      updateSubscription: (req, res, next) => {
        const { id } = req.params;
        const { plan, number, itemId } = req.body;
        stripe.subscriptions.update(
          id,
          {items: [{id: itemId, plan, quantity: number}]},
            async function(err, subscription) {
              await res.json(subscription);
              console.log('API LOGGING UPDATED SUBSCRIPTION----------', subscription);
          }
        );
      },
      //merge to single call
      pauseSubscription: (req, res, next) => {
        const { id } = req.params;
        const { coupon } = req.body;
        stripe.subscriptions.update(
          id,
          {coupon: coupon},
            async function(err, subscription) {
              await res.json(subscription);
              console.log('API LOGGING PAUSED SUBSCRIPTION----------', subscription);
          }
        );
      },
      cancelSubscription: (req, res, next) => {
        const { id } = req.params;
        stripe.subscriptions.del(
          id,
            async function(err, confirmation) {
              await res.json(subscription);
              console.log('API LOGGING CANCELED SUBSCRIPTION----------', subscription);
          }
        );
      },
      getUserAddresses: async (req, res, next) => {
        const Moltin = req.app.locals.moltin;
        const { customer } = req.body;
        try {
            const addresses = await Moltin.Addresses.All({customer});
            res.json(addresses);
        } catch (err) {
          console.log(err);
        }
      },
      getUserOrders: async (req, res, next) => {
        const Moltin = req.app.locals.moltin;
        const { id } = req.params;
        try {
            const orders = await Moltin.Orders.With('items').All();
            const userOrders = orders.data.filter(order => order.relationships.customer.data.id === id);
            res.json({data: userOrders, items: orders.included.items});
        } catch (err) {
          console.log(err);
        }
      },
}