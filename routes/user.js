const express = require("express");
const router = express.Router();

const sql = require("../config/mySqlDb");

// Find user by credentials
router.get("/", async (req, res) => {
  // get username and password
  const username = req.query.username;
  const password = req.query.password;
  let query;
  // if username and password are sent from client
  if (username && password) {
    query = "SELECT * FROM users WHERE username=? AND password = ?";
    // if the username is taken
  } else if (username) {
    query = "SELECT * FROM users WHERE username=?";
  }
  sql.query(query, [username, password], (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

// Create new user
router.post("/", async (req, res) => {
  const newUser = req.body;
  const query =
    "INSERT INTO users (username, password, first_name, last_name, email) VALUES (?,?,?,?,?)";
  sql.query(
    query,
    [
      newUser.username,
      newUser.password,
      newUser.firstName,
      newUser.lastName,
      newUser.email
    ],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    }
  );
});

// Find user by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM users WHERE id=?";
  sql.query(query, [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

// Update user
router.put("/", async (req, res) => {
  const newUser = req.body;
  const query =
    "UPDATE users SET username = ?, password = ?, first_name = ?, last_name = ?, email = ? WHERE id=?;";
  sql.query(
    query,
    [
      newUser.username,
      newUser.password,
      newUser.firstName,
      newUser.lastName,
      newUser.email,
      newUser.id
    ],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    }
  );
});

module.exports = router;
