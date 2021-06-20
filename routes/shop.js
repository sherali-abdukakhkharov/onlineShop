const path = require('path');

const express = require('express');

const shopsController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopsController.getIndex);

router.get('/products', shopsController.getProducts);

router.get('/products/:productId', shopsController.getProduct);

router.get('/cart', shopsController.getCart);

router.post('/cart', shopsController.postCart);

router.post('/cart-delete-item', shopsController.postCartDeleteProduct);

router.get('/orders', shopsController.getOrders);

router.get('checkout', shopsController.getCheckout);

module.exports = router;