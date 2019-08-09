const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController');

router.get('/', cartController.getCartItems);

router.post('/', cartController.addItemToCart);

router.post('/promo', cartController.applyPromo);

router.get('/delete', cartController.deleteCart);

router.post('/:id', cartController.updateCartItem);

router.delete('/:id', cartController.removeCartItem);

module.exports = router;