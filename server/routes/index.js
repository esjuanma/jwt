const express = require('express');
const router = express.Router();

const user = require('../controllers/user');
const product = require('../controllers/product');

router.route('/user')
    .get(user.get)
    .post(user.add);

router.route('/product')
    .get(user.get)
    .post(user.add);

module.exports = router;