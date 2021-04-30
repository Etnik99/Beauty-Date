module.exports = app => {
    const salon = require("../controllers/salon.controller.js");

    //Create a new Salon
    //HTTP POST Method
    app.post("/salons", salon.create);

    //Retrieve all Salons
    //HTTP GET Method
    app.get("/salons", salon.findAll);
    // app.get("/salons/:location", salon.findByLocation);

    app.get("/salons/:id", salon.findLocationBySalon);
}