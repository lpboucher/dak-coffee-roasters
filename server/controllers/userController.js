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
        try {
            console.log('API REGISTER SUBMITTING----------', req.body);
            const newUser = await Moltin.Customers.Create(req.body);
            console.log('API USER REGISTERED----------', newUser);
            res.json(newUser);
        } catch (err) {
          console.log(err);
        }
      },
}