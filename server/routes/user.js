const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/orders/:id', userController.getUserOrders);

router.get('/:id', userController.getUser);

router.post('/login', userController.login);

router.post('/register', userController.register);

router.post('/addresses', userController.getUserAddresses);

router.post('/subscription/pause/:id', userController.pauseSubscription);

router.post('/subscription/cancel/:id', userController.cancelSubscription);

router.post('/subscription/:id', userController.updateSubscription);

router.post('/:id', userController.updateUser);

module.exports = router;