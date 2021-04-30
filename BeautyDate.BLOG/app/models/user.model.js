const sql = require("./db.js");

// constructor
const User = function (user) {
  this.firstname = user.firstname;
  this.username = user.username;
  this.email = user.email;
  this.password = user.password;
  this.role = user.role;
  this.active = user.active;
  this.lastname = user.lastname;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO dataplanninguser SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findById = (userId, result) => {
  sql.query(
    `SELECT * FROM dataplanninguser WHERE id = ${userId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found user: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found user with the id
      result({ kind: "not_found" }, null);
    }
  );
};

User.getAll = (result) => {
  sql.query("SELECT * FROM dataplanninguser", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

User.updateById = (id, user, result) => {
  sql.query(
    "UPDATE dataplanninguser SET firstName = ?, username = ?, email = ?,"+
    " password = ?, role = ?, active = ?, lastName = ? WHERE id = ? ",
    [
      user.firstname,
      user.username,
      user.email,
      user.password,
      user.role,
      user.active,
      user.lastname,
      id,
    ],
    (err, res) => {
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

      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

User.remove = (id, result) => {
  sql.query("DELETE FROM dataplanninguser WHERE id = ?", id, (err, res) => {
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

    console.log("deleted user with id: ", id);
    result(null, res);
  });
};



module.exports = User;
