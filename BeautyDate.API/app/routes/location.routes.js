module.exports = app => {
    const location = require("../controllers/location.controller.js");

    app.get("/location", location.findAll);

    app.get("/location/:id", location.findLocationById);
}