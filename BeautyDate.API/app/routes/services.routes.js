module.exports = app => {

    const salonService = require("../controllers/service.controller");

    //Retrieve SaloonService by Salon Id
    //HTTP GET Method 
    app.get("/salon/service/:salonServiceId", salonService.findSalonServiceBySalonId);

    app.get("/salon/service", salonService.findAll);

};