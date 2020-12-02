const express = require("express");

const guestCtrl = require("../controllers/guests");

const router = express.Router();

// Getting all guests
router
    .route("/guests")
    .get(guestCtrl.getGuests);

// Get a single guest
router
    .route("/guest")
    .get(guestCtrl.getGuest);

// Getting guest analytics per day
router
    .route("/guest-analytics")
    .get(guestCtrl.guestAnalytics);

module.exports = router;