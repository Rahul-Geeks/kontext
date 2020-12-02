const mongoose = require("mongoose");

const Guest = mongoose.model("Guest");

// Getting all guests
module.exports.getGuests = function (req, res, next) {
    Guest.find({}).skip(10 * req.query.page).limit(10).exec((error, guests) => {
        if (error)
            res.status(500).json({ 'message': 'Error while getting guests', 'error': error });
        else {
            res.status(200).json(guests);
        }
    });
}

// Get a single guest
module.exports.getGuest = function (req, res, next) {
    Guest.findById(req.query.guestId).exec((error, guestObj) => {
        if (error)
            res.status(500).json({ 'message': 'Error while getting a guest', 'error': error });
        else {
            res.status(200).json(guestObj);
        }
    });
}

// Getting guest analytics per day
module.exports.guestAnalytics = function (req, res, next) {
    Guest.aggregate([
        { "$match": {} },
        { "$group": { "_id": "$created_at" } }
    ]).exec((error, guests) => {
        if (error)
            res.status(500).json({ 'message': 'Error while getting a guest', 'error': error });
        else {
            let guestBarChartData = guests.map(guest => guest.length);
            res.status(200).json(guestBarChartData);
        }
    });
}