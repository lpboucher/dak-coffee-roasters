const MoltinGateway = require('@moltin/sdk').gateway;
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
 
const Moltin = MoltinGateway({
  client_id: process.env.MOLTIN_CLIENT_ID,
  client_secret: process.env.MOLTIN_CLIENT_SECRET
})

module.exports = {
    login: async (req, res, next) => {
        const { email, password } = req.body;
        let user;
        try {
            console.log('API LOGIN SUBMITTING----------', { email, password });
            user = await Moltin.Customers.Token(email, password);
        } catch (err) {
          return res.json({error: err.errors[0].detail});
        }
        console.log('API USER LOGGED IN----------', user);
        res.json(user);
      },
    register: async (req, res, next) => {
      const { name, email, password } = req.body;
      let user;
      try {
        user = await Moltin.Customers.Create({ name, email });
        console.log('CHECKING USER EXISTS----------', user);
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
          console.log('API USER REGISTERED----------', newUser);
          res.json(newUser);
        } catch (err) {
          console.log(err)
        } 
      });
      },
      getUser: async (req, res, next) => {
        const { id } = req.params;
        try {
          if (id.substr(0, 3) === 'cus') {
            stripe.customers.retrieve(
              id, 
              (err, customer) => {
                res.json(customer);
                console.log('API LOGGING CUSTOMER----------', customer);
              }
            );
          } else {
            const customer = await Moltin.Customers.Get(id);
            res.json(customer);
            console.log('API LOGGING CUSTOMER----------', customer);
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
      getUserAddresses: async (req, res, next) => {
        const { customer } = req.body;
        try {
            console.log('API GETTING ADDRESSES----------', { customer });
            const addresses = await Moltin.Addresses.All({customer});
            console.log('API LOGGING ADDRESSES----------', addresses);
            res.json(addresses);
        } catch (err) {
          console.log(err);
        }
      },
      getUserOrders: async (req, res, next) => {
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