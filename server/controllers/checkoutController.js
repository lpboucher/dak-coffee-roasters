const MoltinGateway = require('@moltin/sdk').gateway
 
const Moltin = MoltinGateway({
  client_id: process.env.MOLTIN_CLIENT_ID,
  client_secret: process.env.MOLTIN_CLIENT_SECRET
})

module.exports = {
    // Get all products
    submitOrder: async (req, res, next) => {
        try {
            console.log('API ORDER SUBMITTING----------', req.body);
          //const order = await Moltin.Cart().Checkout(req.params.id, req.body);
          //console.log('API RESPONSE SUBMIT ORDER----------', order);
          //res.json(order);
        } catch (err) {
          console.log(err);
        }
      },
}