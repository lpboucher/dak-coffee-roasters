const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

/* GET home page. */
router.get('/', productsController.getAllProducts);

router.get('/featured', productsController.getAllFeatured);

router.get('/categories', productsController.getAllCategories)

module.exports = router;