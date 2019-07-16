const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/login', userController.login);

router.post('/register', userController.register);

router.post('/addresses', userController.getUserAddresses);

router.post('/orders', userController.getUserOrders);

module.exports = router;