const express = require("express");

const serviceCtrl = require("../controllers/services");
const { route } = require("./guests");

const router = express.Router();

// Creating a service
router
    .route("/service")
    .post(serviceCtrl.createService);

// Updating a service
router
    .route("/service")
    .patch(serviceCtrl.updateService);

// Get all the services
router
    .route("/services")
    .get(serviceCtrl.getServices);

// Get a particular service with all guests order data
router
    .route("/service")
    .get(serviceCtrl.getService);

module.exports = router;