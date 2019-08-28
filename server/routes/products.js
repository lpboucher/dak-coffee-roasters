const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

/* GET home page. */
router.get('/featured', productsController.getAllFeatured);

router.get('/categories', productsController.getAllCategories);

router.get('/stock', productsController.getAllProductStock);

router.get('/:currency', productsController.getAllProducts);

module.exports = router;