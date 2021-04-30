const sql = require("../routes/db.js");

//constructor
const Reservation = function (reservation) {
    this.reservationdate = reservation.reservationdate;
    this.companyname = reservation.companyname;
    this.companylocation = reservation.companylocation;
    this.status = reservation.status;
    this.price = reservation.price;
    this.user_id = reservation.user_id;
};

const ReservationUpdate = function (reservation) {
    this.newReservationDate = reservation.newReservationDate;
    this.oldReservationDate = reservation.oldReservationDate;
    this.companyname = reservation.companyname;
    this.companylocation = reservation.companylocation;
    this.status = reservation.status;
    this.price = reservation.price;
    this.user_id = reservation.user_id;
}

Reservation.findByID = (userID, result) => {
    sql.query(
        `SELECT * FROM reservation WHERE user_id = ${userID}`,
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
            result({ kind: "not_found" }, null);
        }
    );
};


Reservation.create = (newReservation, result) => {
    sql.query("INSERT INTO reservation SET ?", newReservation, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created reservation: ", { id: res.insertId, ...newReservation });
        result(null, { id: res.insertId, ...newReservation });
    });
};


Reservation.delete = (userID, result) => {
    sql.query("DELETE FROM reservation WHERE user_id = " + userID, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Deleted reservations: " + res.length);
            result(null, res.length);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

ReservationUpdate.updateById = (user_id, reservation, result) => {
    console.log("NEW Ate: " + reservation.newReservationDate);
    console.log("Old date" + reservation.oldReservationDate);
    sql.query(
        "UPDATE reservation SET reservationdate = ?, companyname = ?, companylocation = ?," +
        " status = ?, price = ? WHERE user_id = ? AND reservationdate = ?",
        [
            reservation.newReservationDate,
            reservation.companyname,
            reservation.companylocation,
            reservation.status,
            reservation.price,
            user_id,
            reservation.oldReservationDate,
        ],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found reservation with the id
                console.log("Update failed! Reservation with user id= " + user_id + " not found. Or Reservationdate not found " + reservation.oldReservationDate);
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("update reservation: ", { user_id: user_id, ...reservation });
            console.log("Updated Reservations:" + res.affectedRows);
            result(null, { user_id: user_id, ...reservation, updated: res.affectedRows });
        }
    );
};

Reservation.getAll = (result) => {
    sql.query("SELECT * FROM reservation", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("reservations: ", res);
        result(null, res);
    });
};

module.exports = {
    Reservation,
    ReservationUpdate
}

