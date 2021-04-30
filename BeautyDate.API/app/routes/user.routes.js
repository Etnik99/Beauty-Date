module.exports = app => {
  const users = require("../controllers/user.controller.js");

  // Create a new User
  //HTTTP POST Method
  app.post("/users", users.create);

  // Retrieve all Users
  //HTTP GET Method
  app.get("/users", users.findAll);

  // Retrieve a single User with UserId
  //HTTP GET Method
  app.get("/users/:userId", users.findOne);

  // Update a user with UserId
  //HTTP PUT Method
  app.put("/users/:userId", users.update);

  // Delete a User with UserId
  //HTTP DELETE  Mathod
  app.delete("/users/:userId", users.delete);


};
