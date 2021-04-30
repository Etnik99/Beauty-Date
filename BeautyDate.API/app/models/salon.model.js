const sql = require("../routes/db.js");

//constructor 

const Salon = function (salon) {
    this.salonsId = salon.salonsId;
    this.name = salon.name;
    this.location = salon.location;
    this.description = salon.description;
};

Salon.create = (newSalon, result) => {
    sql.query("INSERT INTO salons SET ?", newSalon, (err, res) => {

        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    });
};

Salon.findById = (salonId, result) => {
    sql.query(`select * from salons s where id = ${salonId}`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found salon: ", res[0]);
                result(null, res[0]);
                return;
            }

            // not found user with the id
            result({ kind: "not_found" }, null);
        }
    );
};
Salon.findSalonByLocation = (location, result) => {
    sql.query(`select * from salons s where location = ${location}`,
        (err, res) => {
            if (err) {
                result(err, null);
                return
            }
            if (res.length) {
                result(null, res[0]);
                return;
            }

            result({ kind: "not_found" }, null);
        }
    )
}

Salon.remove = (id, result) => {
    sql.query("DELETE FROM salons WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found User with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted salons with id: ", id);
        result(null, res);
    });
};

Salon.getAll = (result) => {
    sql.query("SELECT * FROM salons", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("salons: ", res);
        result(null, res);
    });
};
Salon.getLocation = (id, result) => {
    sql.query(`select location.location from location FULL OUTER JOIN salons on location.id = salons.location where salons.id = ${id}`,
        (err, res) => {
            if (err) {
                result(err, null);
                return
            }
            if (res.length) {
                result(null, res[0]);
                return;
            }

            result({ kind: "not_found" }, null);
        }
    )
}
module.exports = Salon;