const express = require("express");
const bodyParser = require("body-parser");
const port = 3001;

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Euron's Date Planning." });
});

require("./app/routes/user.routes.js")(app);
require("./app/routes/reservation.routes.js")(app);
require("./app/routes/salons.routes.js")(app);
require("./app/routes/services.routes.js")(app);
require("./app/routes/location.routes.js")(app);

// set port, listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

