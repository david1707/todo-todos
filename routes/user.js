const express = require("express");

const router = express.Router();

// Create
router.post("/create", (req, res, next) => {
  //TODO Create new user
  // Return created user
  res.json({ data: "User created" });
});

// Profile
router.get("/profile", (req, res, next) => {
  //TODO Just return the own user stored on req.user. No other users may be requested
  // Return own user
  res.json({ data: "Current user data" });
});

router.patch("/profile", (req, res, next) => {
  //TODO Update Username, email and/or password and auto-update updatedAt
  // Return updated user
  res.json({ data: "User updated" });
});

// Delete User
router.delete("/delete", (req, res, next) => {
  //TODO Delete own user
  // Return confirmation
  res.json({ data: "User deleted" });
});

// Methods related to Todos
router.get("/todos", (req, res, next) => {
  //TODO Returns all the TODOS that the user can edit.

  res.json({
    data: [
      { id: 1, name: "Todo list #1", todos: [] },
      { id: 3, name: "Todo list #3", todos: [] },
      { id: 7, name: "Todo list #7", todos: [] },
      { id: 12, name: "Todo list #12", todos: [] },
      { id: 19, name: "Todo list #19", todos: [] },
    ],
  });
});

router.get("/own-todos", (req, res, next) => {
  //TODO Returns all the TODOS created by the user

  res.json({
    data: [
      { id: 1, name: "Todo list #1", todos: [] },
      { id: 3, name: "Todo list #3", todos: [] },
      { id: 7, name: "Todo list #7", todos: [] },
    ],
  });
});

// router.post("/create", (req, res, next) => {
//   // TODO

//   res.json({ data: "" });
// });

module.exports = router;
