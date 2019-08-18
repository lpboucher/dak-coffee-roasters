const express = require('express');
const router = express.Router();

const newsletter = require('../utils/emails');

router.post('/add', newsletter.addToNewsletter);

module.exports = router;