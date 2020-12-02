require("./app/models/db.conn");
const express = require("express");

const serviceRoutes = require("./app/routes/services");
const guestRoutes = require("./app/routes/guests");
const orderRoutes = require("./app/routes/orders");

let app = express();

app.use("/api", serviceRoutes);
app.use("/api", guestRoutes);
app.use("/api", orderRoutes);

app.listen(8000, (error) => {
    if (error)
        console.log("ERROR WHILE STARTING THE APP", error);
    else {
        console.log("Connected with server at port 8000");
    }
});