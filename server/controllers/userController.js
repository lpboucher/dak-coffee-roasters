const MoltinGateway = require('@moltin/sdk').gateway
 
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
    register: async (req, res, next) => {
      const { name, email, password } = req.body;
        try {
            console.log('API REGISTER SUBMITTING----------', { name, email, password });
            const newUser = await Moltin.Customers.Create({ name, email, password });
            console.log('API USER REGISTERED----------', newUser);
            res.json(newUser);
        } catch (err) {
          console.log(err);
        }
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