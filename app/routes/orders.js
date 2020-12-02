const express = require("express");

const orderCtrl = require("../controllers/orders");

const router = express.Router();

// Creating an order
router
    .route("/order")
    .post(orderCtrl.createOrder);

// Getting an order
router
    .route("/order")
    .get(orderCtrl.getOrder);

module.exports = router;