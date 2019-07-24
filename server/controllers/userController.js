const MoltinGateway = require('@moltin/sdk').gateway;
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
 
const Moltin = MoltinGateway({
  client_id: process.env.MOLTIN_CLIENT_ID,
  client_secret: process.env.MOLTIN_CLIENT_SECRET
})

module.exports = {
    login: async (req, res, next) => {
        const { email, password } = req.body;
        try {
            console.log('API LOGIN SUBMITTING----------', { email, password });
            const user = await Moltin.Customers.Token(email, password);
            console.log('API USER LOGGED IN----------', user);
            res.json(user);
        } catch (err) {
          console.log(err);
        }
      },
    register: (req, res, next) => {
      const { name, email, password } = req.body;
      stripe.customers.create({
        description: `Test customer for ${email}`,
        name,
        email,
      }, async (err, customer) => {
        try {
          const newUser = await Moltin.Customers.Create({ name, email, password, stripe_id: customer.id });
          console.log('API USER REGISTERED----------', newUser);
          res.json(newUser);
        } catch {
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
      updateUser: async (req, res, next) => {
        const { id } = req.params;
        console.log(req.body);
        /*stripe.customers.update(
          'cus_FUeVc912pfqCvr',
          {metadata: {order_id: '6735'}},
          async (err, customer) => {
            /*try {
              const newUser = await Moltin.Customers.Create({ name, email, password, stripe_id: customer.id });
              console.log('API USER REGISTERED----------', newUser);
              res.json(newUser);
            } catch {
              console.log(err)
            } 
      }
        );*/
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
        const { token } = req.body;
        try {
            console.log('API GETTING ORDERS----------', { token });
            const orders = await Moltin.Orders.All({token});
            console.log('API LOGGING ORDERS----------', orders);
            res.json(orders);
        } catch (err) {
          console.log(err);
        }
      },
}