module.exports = app => {
    const reservations = require ("../controllers/reservation.controller.js");

    //retrive a single Reservation with userId
    //HTTP GET method
    app.get("/reservations/:userId", reservations.findOne );

    app.post("/reservations/", reservations.create);
}



