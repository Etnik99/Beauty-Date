const sql = require("../routes/db.js");

//constructor 

const Location = function (location) {
    this.id = location.id;
    this.location = location.location;
};

Location.create = (newLocation, result) => {
    sql.query("INSERT INTO location SET ?", newLocation, (err, res) => {

        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    });
};

Location.findById = (id, result) => {
    sql.query(`select * from location l where id = ${id}`,
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

Location.remove = (id, result) => {
    sql.query("DELETE FROM location WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted salons with id: ", id);
        result(null, res);
    });
};

Location.getAll = (result) => {
    sql.query("SELECT * FROM location", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("salons: ", res);
        result(null, res);
    });
};

module.exports = Location;