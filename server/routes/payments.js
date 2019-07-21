const express = require('express');
const router = express.Router();

const paymentController = require('../controllers/paymentController');

router.post('/confirm', paymentController.submitPayment);

module.exports = router;