module.exports = app => {
    const reservations = require ("../controllers/reservation.controller.js");

    //retrive a single Reservation with userId
    //HTTP GET method
    app.get("/reservations/:userId", reservations.findOne );
    
    
    // Create a new reservation
    //HTTTP POST Method
    app.post("/reservations/", reservations.create);
    
    
    // Delete a reservation with UserId
    //HTTP DELETE  Mathod
    app.delete("/reservations/:userId", reservations.delete);

    // Update a reservations with UserId
    //HTTP PUT Method
    app.put("/reservations/:userId", reservations.update);
      
      // Retrieve all Reservations
      //HTTP GET Method
    app.get("/reservations", reservations.findAll);
  }



