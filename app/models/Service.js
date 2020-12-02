const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ServiceSchema = new Schema({
    'meeting_rooms': [{ type: String }],
    'dining': String,
    'live_even_bookings': [{ type: String }],
    'room_upgrade': Boolean,
    'car_rental': Boolean,
    'description': String,
    'image': String,
    'price': Number,
    'discount': Number,
    'ratings': Number
});

module.exports = mongoose.model("Service", ServiceSchema);