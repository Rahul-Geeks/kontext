const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let OrderSchema = new Schema({
    '_service': { type: ObjectId, 'ref': 'Service' },
    '_guest': { type: ObjectId, 'ref': 'Guest' },
    'status': String
});

module.exports = mongoose.model("Order", OrderSchema);