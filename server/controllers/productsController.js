const MoltinGateway = require('@moltin/sdk').gateway
 
const Moltin = MoltinGateway({
  client_id: process.env.MOLTIN_CLIENT_ID,
  client_secret: process.env.MOLTIN_CLIENT_SECRET
})

module.exports = {
    // Get all products
    getAllProducts: async (req, res, next) => {
            try {
              const products = await Moltin.Products.With('files, main_images, collections').All();
              console.log('api response products----------', products);
              res.json(products);
            } catch (err) {
              console.log(err);
            }
          },
}