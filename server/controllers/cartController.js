module.exports = {
  getCartItems: async (req, res, next) => {
    const Moltin = req.app.locals.moltin;
    try {
      const cartItems = await Moltin.Cart().Items();
      res.json(cartItems);
    } catch (err) {
      console.log(err);
    }
  },
  addItemToCart: async (req, res, next) => {
    const Moltin = req.app.locals.moltin;
    req.app.locals.moltin.config.currency = req.body.currency;
    try {
      const cartItems = await Moltin.Cart().AddProduct(req.body.id, req.body.quantity);
      res.json(cartItems);
    } catch (err) {
      console.log(err);
      res.json({error: err.errors[0]})
    }
  },
  updateCartItem: async (req, res, next) => {
    const Moltin = req.app.locals.moltin;
    try {
      const updatedItems = await Moltin.Cart().UpdateItemQuantity(req.params.id, req.body.quantity);
      res.json(updatedItems);
    } catch (err) {
      console.log(err);
      res.json({error: err.errors[0]})
    }
  },
  removeCartItem: async (req, res, next) => {
    const Moltin = req.app.locals.moltin;
    try {
      const newCartItems = await Moltin.Cart().RemoveItem(req.params.id);
      res.json(newCartItems);
    } catch (err) {
      console.log(err);
    }
  },
  deleteCart: async (req, res, next) => {
    const Moltin = req.app.locals.moltin;
    try {
      const deletedCart = await Moltin.Cart().Delete();
      res.json(deletedCart);
    } catch (err) {
      console.log(err);
    }
  },
  applyPromo: async (req, res, next) => {
    const Moltin = req.app.locals.moltin;
    const { promo, currency } = req.body;
    req.app.locals.moltin.config.currency = currency;
    console.log('--------APPLYING PROMO WITH', promo, currency)
    try {
      const cartWithPromo = await Moltin.Cart().AddPromotion(promo.promo);
      res.json(cartWithPromo);
    } catch (err) {
      return res.json({error: err.errors[0].detail})
    }
  },
}