const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let GuestSchema = new Schema({
    'name': String,
    'address': String,
    'phone_number': String
}, { 'timestamps': true });

module.exports = mongoose.model("Guest", GuestSchema);