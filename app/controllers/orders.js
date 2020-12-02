const mongoose = require("mongoose");

const Order = mongoose.model("Order");

// Creating an order
module.exports.createOrder = function (req, res, next) {
    let newOrder = {
        '_service': req.body.serviceId,
        '_guest': req.body.guestId,
        'status': 'Started'
    };

    Order.create(newOrder, (error, orderObj) => {
        if (error)
            res.status(500).json({ 'message': 'Error while adding an order', 'error': error });
        else {
            res.status(200).json(orderObj);
        }
    });
}

// Getting an order
module.exports.getOrder = function (req, res, next) {
    Order.find({ '_service': req.query.serviceId, '_guest': req.query.guestId }).exec((error, orderObj) => {
        if (error)
            res.status(500).json({ 'message': 'Error while getting an order', 'error': error });
        else {
            res.status(200).json(orderObj);
        }
    });
}