const sql = require ("./db.js");

//constructor
const Reservation = function (reservation){
    this.reservationdate = reservation.reservationdate;
    this.companyname = reservation.companyname;
    this.companylocation = reservation.companylocation;
    this.status = reservation.status;
    this.price = reservation.price;
    this.user_Id = reservation.user_Id;
};


Reservation.findByID = (userID, result) => {
    sql.query(
        `SELECT * FROM reservation WHERE User_ID = ${userID}`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found reservation: ", res[0]);
                result(null, res[0]);
                return;
            }

            //not found reservation with the id
            result({ kind: "not_found"}, null); 
        }
        );
    };


Reservation.create = (newReservation, result) =>{
    sql.query("INSERT INTO reservation SET ?", newReservation, (err,res) =>{
        if (err){
            console.log("error: ",err);
            result(err, null);
            return;
        }
        console.log("**************************Userid " + newReservation.user_Id );
        console.log("created reservation: ",{id: res.insertId, ...newReservation});
        result(null, {id: res.insertId, ...newReservation});
    });
};

    module.exports = Reservation;
