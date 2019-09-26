const MoltinGateway = require('@moltin/sdk').gateway
const MemStorage = require('@moltin/sdk').MemoryStorageFactory

const config = {
  client_id: process.env.MOLTIN_CLIENT_ID,
  client_secret: process.env.MOLTIN_CLIENT_SECRET,
  storage: new MemStorage()
}

module.exports = {
  getCartItems: async (req, res, next) => {
    try {
      const cartItems = await MoltinGateway(config).Cart().Items();
      console.log('API RESPONSE GET CART----------', cartItems);
      res.json(cartItems);
    } catch (err) {
      console.log(err);
    }
  },
  addItemToCart: async (req, res, next) => {
    try {
      const cartItems = await MoltinGateway({
        ...config,
        currency: req.body.currency,
      }).Cart().AddProduct(req.body.id, req.body.quantity);
      console.log('API RESPONSE ADD TO CART----------', cartItems);
      res.json(cartItems);
    } catch (err) {
      console.log(err);
      res.json({error: err.errors[0]})
    }
  },
  updateCartItem: async (req, res, next) => {
    try {
      const updatedItems = await MoltinGateway(config).Cart().UpdateItemQuantity(req.params.id, req.body.quantity);
      console.log('API RESPONSE UPDATED IN CART----------', updatedItems);
      res.json(updatedItems);
    } catch (err) {
      console.log(err);
      res.json({error: err.errors[0]})
    }
  },
  removeCartItem: async (req, res, next) => {
    try {
      const newCartItems = await MoltinGateway(config).Cart().RemoveItem(req.params.id);
      console.log('API RESPONSE REMOVED, NEW CART----------', newCartItems);
      res.json(newCartItems);
    } catch (err) {
      console.log(err);
    }
  },
  deleteCart: async (req, res, next) => {
    try {
      const deletedCart = await MoltinGateway(config).Cart().Delete();
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
        ...config,
        currency: currency,
      }).Cart().AddPromotion(promo.promo);
      console.log('PROMOTION APPLIED----------', cartWithPromo);
      res.json(cartWithPromo);
    } catch (err) {
      return res.json({error: err.errors[0].detail})
    }
  },
}