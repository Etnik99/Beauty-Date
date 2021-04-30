const Salon = require("../models/salon.model.js");


//insert 
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    //create a salon
    const salon = new Salon({
        salonsId: req.body.salonsId,
        name: req.body.name,
        location: req.body.location,
        description: req.body.description
    });

    // Save user in the database
    User.create(salon, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Salon."
            });
        else res.send(data);
    });
};

exports.findByLocation = (req, res) => {
    Salon.findSalonByLocation(req.params.location, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while finding Salons by location."
            });
        else res.send(data);
    });
};

//Retrieve all Salons from Mongo DB 
exports.findAll = (req, res) => {
    Salon.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Salon."
            });
        else res.send(data);
    });
};
exports.findLocationBySalon = (req, res) => {
    Salon.getLocation(req.params.salonsId, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while finding Salons by location."
            });
        else res.send(data);
    });
};