require("./Guest");
require("./Order");
require("./Service");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/kontext", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let _conn = mongoose.connection;

_conn.on("error", (error) => {
    console.log("Connection failed with mongodb", error);
});

_conn.once("open", () => {
    console.log("Connection with mongodb successful");
});