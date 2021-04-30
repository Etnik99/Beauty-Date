const Location = require("../models/location.model.js");


//insert 
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    //create a salon
    const location = new Location({
        id: req.body.id,
        location: req.body.location,
    });

    // Save user in the database
    Location.create(location, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Salon."
            });
        else res.send(data);
    });
};
exports.findLocationById = (req, res) => {
    Location.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: ` Not found SalonService with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving SalonService with id " + req.params.salonServiceId
                });
            }
        } else res.send(data);
    });
};
//Retrieve all Salons from Mongo DB 
exports.findAll = (req, res) => {
    Location.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Salon."
            });
        else res.send(data);
    });
};