const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/:id', userController.getUser);

router.post('/login', userController.login);

router.post('/register', userController.register);

router.post('/addresses', userController.getUserAddresses);

router.post('/orders', userController.getUserOrders);

router.post('/:id', userController.updateUser);

module.exports = router;