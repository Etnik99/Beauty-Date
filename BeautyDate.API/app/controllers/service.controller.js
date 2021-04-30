const SalonService = require("../models/service.model");


//Create SalonService

exports.findSalonServiceBySalonId = (req, res) => {
    SalonService.findBySalonId(req.params.salonServiceId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: ` Not found SalonService with id ${req.params.salonServiceId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving SalonService with id " + req.params.salonServiceId
                });
            }
        } else res.send(data);
    });
};
exports.findAll = (req, res) => {
    SalonService.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        else res.send(data);
    });
};