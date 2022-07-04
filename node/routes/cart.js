const express = require('express');
const { calculatePrice } = require('../controllers/cart');

const router = express.Router();

router.route('/').post(calculatePrice);

module.exports = router;
