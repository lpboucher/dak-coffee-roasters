module.exports = {
    // Get all products
    getAllProducts: async (req, res, next) => {
      const Moltin = req.app.locals.moltin;
      req.app.locals.moltin.config.currency = req.params.currency;
      try {
        const products = await Moltin.Products.With(['files, main_images']).All();
        res.json(products);
      } catch (err) {
        console.log(err);
      }
    },
    getAllFeatured: async(req, res, next) => {
      const Moltin = req.app.locals.moltin;
      try {
        const featured = await Moltin.Collections.All();
        res.json(featured);
      } catch (err) {
        console.log(err);
      }
    },
    getAllCategories: async(req, res, next) => {
      const Moltin = req.app.locals.moltin;
      try {
        const categories = await Moltin.Categories.All();
        res.json(categories);
      } catch (err) {
        console.log(err);
      }
    },
    getAllProductStock: async(req, res, next) => {
      const Moltin = req.app.locals.moltin;
      try {
        const inventories = await Moltin.Inventories.All();
        res.json(inventories);
      } catch (err) {
        console.log(err);
      }
    },
}