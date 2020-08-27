const express = require("express");

const router = express.Router();

router.post("/login", (req, res, next) => {
  //TODO Lets the user login with email and password
  // Confirms user login and returns a JWT
  res.json({ data: "User logged in" });
});

router.get("/logout", (req, res, next) => {
  // TODO Logs out the current user
  // Logout user from the API, removing the JWT token
  res.json({ data: "User logout" });
});

router.post("/signin", (req, res, next) => {
  //TODO Create new user
  // Creates a new User
  res.json({ data: "User created" });
});


module.exports = router;