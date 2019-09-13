const MoltinGateway = require('@moltin/sdk').gateway
 
const Moltin = MoltinGateway({
  client_id: process.env.MOLTIN_CLIENT_ID,
  client_secret: process.env.MOLTIN_CLIENT_SECRET
})

module.exports = {
  getCartItems: async (req, res, next) => {
    try {
      const cartItems = await Moltin.Cart().Items();
      console.log('API RESPONSE GET CART----------', cartItems);
      res.json(cartItems);
    } catch (err) {
      console.log(err);
    }
  },
  addItemToCart: async (req, res, next) => {
    try {
      const cartItems = await MoltinGateway({
        client_id: process.env.MOLTIN_CLIENT_ID,
        client_secret: process.env.MOLTIN_CLIENT_SECRET,
        currency: req.body.currency
      }).Cart().AddProduct(req.body.id, req.body.quantity);
      console.log('API RESPONSE ADD TO CART----------', cartItems);
      res.json(cartItems);
    } catch (err) {
      console.log(err);
    }
  },
  updateCartItem: async (req, res, next) => {
    try {
      const updatedItems = await Moltin.Cart().UpdateItemQuantity(req.params.id, req.body.quantity);
      console.log('API RESPONSE UPDATED IN CART----------', updatedItems);
      res.json(updatedItems);
    } catch (err) {
      console.log(err);
    }
  },
  removeCartItem: async (req, res, next) => {
    try {
      const newCartItems = await Moltin.Cart().RemoveItem(req.params.id);
      console.log('API RESPONSE REMOVED, NEW CART----------', newCartItems);
      res.json(newCartItems);
    } catch (err) {
      console.log(err);
    }
  },
  deleteCart: async (req, res, next) => {
    try {
      const deletedCart = await Moltin.Cart().Delete();
      console.log('API RESPONSE CART CLEARED----------', deletedCart);
      res.json(deletedCart);
    } catch (err) {
      console.log(err);
    }
  },
  applyPromo: async (req, res, next) => {
    const { promo, currency } = req.body;
    console.log('--------APPLYING PROMO WITH', promo, currency)
    try {
      const cartWithPromo = await MoltinGateway({
        client_id: process.env.MOLTIN_CLIENT_ID,
        client_secret: process.env.MOLTIN_CLIENT_SECRET,
        currency: currency
      }).Cart().AddPromotion(promo.promo);
    } catch (err) {
      return res.json({error: err.errors[0].detail})
    }
      console.log('PROMOTION APPLIED----------', cartWithPromo);
      res.json(cartWithPromo);
  },
}