const Reservation = require ("../models/reservation.model.js");

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
        user_Id:  req.body.user_Id

     });

     console.log("Controller  "  + reservation.user_Id +  " " + req.body.user_Id)

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
