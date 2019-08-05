const express = require('express');
const router = express.Router();

const checkoutController = require('../controllers/checkoutController');

router.post('/', checkoutController.submitOrder);

router.post('/finalize', checkoutController.finalizeOrder)

module.exports = router;