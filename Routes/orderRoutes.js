const express = require('express');
const router = express.Router();
const auth = require('../auth.js');

const { createOrderFromCart } = require('../Controllers/order-controllers/createOrderFromCart.js');
const { createOrderFromProduct} = require('../Controllers/order-controllers/createOrderFromProduct.js');
const showOrder = require('../Controllers/order-controllers/showOrders.js');
const { updateOrderToComplete } = require('../Controllers/order-controllers/updateOrderToComplete.js');
const { showCompleteOrder } = require('../Controllers/order-controllers/shwCompletedOrders.js');

router.post('/createOrder/:cartId', auth.verify, createOrderFromCart);
router.post('/createOrderProduct/:productId', auth.verify, createOrderFromProduct);
router.get('/onGoingOrders', auth.verify, showOrder.showOnGoingOrders);
router.get('/showSingleOrder/:orderId', auth.verify, showOrder.showSingleOrder);
router.put('/recievedOrder/:orderId', auth.verify, updateOrderToComplete );
router.get('/showCompletedOrders', auth.verify, showCompleteOrder)

module.exports = router;
