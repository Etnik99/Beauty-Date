const reservationModel = require ("../models/reservation.model.js");
const Reservation = reservationModel.Reservation;
const ReservationUpdate = reservationModel.ReservationUpdate;

//find a single Reservation with a userid
exports.findOne = (req, res) => {

     const userId = req.params.userId;

    Reservation.findByID(userId, (err, data) =>{
        if (err){
            if (err.kind === "not_found"){
                res.status(404).send({
                    message: `Not found Reservation with id ${userId}.`
                });

            }else {
                res.status(500).send({
                    message: `error retrieving Reservation with id ${userId}.`
                });
            }
        }else res.send(data);
    });
};

//Create and save new Reservation
exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    
    //Create a reservation
    const reservation = new Reservation({
        reservationdate: req.body.reservationdate,
        companyname: req.body.companyname,
        companylocation: req.body.companylocation,
        status: req.body.status,
        price: req.body.price,
        user_id: req.body.user_id
        

     });

     Reservation.create(reservation, (err, data)=>{
         if (err){
         res.status(500).send({
             message:
                err.message || "Some error occurred while creating the Reservation."
         });
        } else{
            res.send(data);
        } 
     });
}

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    Reservation.delete(req.params.userId, (err, data) => {
        if (err) {
            if(err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Reservation with id ${req.params.user_Id}.`
                });
            } else {
                res,status(500).send({
                    message: "Could not delete reservation with id " + req.parms.user_Id
                });
            }
        } else res.send({message: ` Successfully delted Reservations : ${data}`});
    });
};

// Update a reservation identified by the user_Id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log("Controller " +req.body);
  
    const reservationUpdated = req.body;
    ReservationUpdate.updateById(
      req.params.userId,
      new ReservationUpdate(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Reservation with id ${req.params.user_Id} or reservation Date ${reservationUpdated.oldReservationDate}`
            });
          } else {
            res.status(500).send({
              message: "Error updating reservation with id " + req.params.user_Id
            });
          }
        } else res.send(data);
      }
    );
  };

  // Retrieve all Reservations from the database.
exports.findAll = (req, res) => {
    Reservation.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving reservations."
        });
      else res.send(data);
    });
  };