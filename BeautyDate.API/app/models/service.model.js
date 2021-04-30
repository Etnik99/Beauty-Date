const sql = require("../routes/db.js");

//Constructor
const SalonService = function (salonService) {
    this.id = salonService.id;
    this.name = salonService.name;
    this.price = salonService.price;
    this.salon_id = salonService.salon_id;
};

SalonService.findBySalonId = (salon_id, result) => {
    sql.query(`SELECT * FROM salonservices WHERE salons_id = ${salon_id}`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found SalonService: ", res);
                result(null, res);
                return;
            }

            //not found salonService 
            result({ kind: "not_found" }, null);
        });
};
SalonService.getAll = (result) => {
    sql.query("SELECT * FROM salonservices", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("salons: ", res);
        result(null, res);
    });
};



module.exports = SalonService;