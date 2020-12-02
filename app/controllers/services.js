const mongoose = require("mongoose");

const Service = mongoose.model("Service");

// Creating a service
module.exports.createService = function (req, res, next) {
    let b = req.body;
    let newService = {
        'meeting_rooms': b.meeting_rooms,
        'dining': b.dining,
        'live_even_bookings': b.live_even_bookings,
        'room_upgrade': b.room_upgrade,
        'car_rental': b.car_rental,
        'description': b.description,
        'image': b.image,
        'price': b.price,
        'discount': b.discount,
        'ratings': b.ratings
    };

    Service.create(newService, (error, serviceObj) => {
        if (error)
            res.status(500).json({ 'message': 'Error while creating a service', 'error': error });
        else {
            res.status(200).json({ 'message': 'Service created successfully' });
        }
    });
}

// Updating a service
module.exports.updateService = function (req, res, next) {
    let b = req.body;
    let updateService = {
        "$set": {
            'meeting_rooms': b.meeting_rooms,
            'dining': b.dining,
            'live_even_bookings': b.live_even_bookings,
            'room_upgrade': b.room_upgrade,
            'car_rental': b.car_rental,
            'description': b.description,
            'image': b.image,
            'price': b.price,
            'discount': b.discount,
            'ratings': b.ratings
        }
    };
    Service.findByIdAndUpdate(req.query.serviceId, updateService, { new: true }).exec((error, serviceObj) => {
        if (error)
            res.status(500).json({ 'message': 'Error while updating a service', 'error': error });
        else {
            res.status(200).json(serviceObj);
        }
    });
}

// Get all the services
module.exports.getServices = function (req, res, next) {
    Service.find({}).skip(10 * req.query.page).limit(10).exec((error, services) => {
        if (error)
            res.status(500).json({ 'message': 'Error while getting services', 'error': error });
        else {
            res.status(200).json(services);
        }
    });
}

// Get a particular service with all guests order data
module.exports.getService = function (req, res, next) {
    Service.aggregate([
        { "$match": { "_id": req.query.serviceId } },
        {
            "$lookup": {
                "from": "order",
                "let": { "serviceId": "$_id" },
                "pipeline": [{
                    "$match": { "$expr": { "$eq": ["$$serviceId", "$_service"] } }
                }]
            }
        }
    ]).exec((error, serviceObj) => {
        if (error)
            res.status(500).json({ 'message': 'Error while getting services', 'error': error });
        else {
            res.status(200).json(services);
        }
    });
}