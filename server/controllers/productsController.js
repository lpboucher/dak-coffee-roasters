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
        console.log('API RESPONSE PRODUCTS----------', products);
        res.json(products);
      } catch (err) {
        console.log(err);
      }
    },
    getAllFeatured: async(req, res, next) => {
      try {
        const featured = await Moltin.Collections.With('products').All();
        console.log('API RESPONSE FEATURED----------', featured);
        res.json(featured);
      } catch (err) {
        console.log(err);
      }
    },
}