const express = require("express");

const router = express.Router();

router.get("/:id", (req, res, next) => {
  //TODO Return Todo with ID :id
  // Get a Todo
  const id = req.params.id;

  res.json({ data: { id: id, name: `Todo list #${id}`, todos: [] } });
});

router.post("/", (req, res, next) => {
  // TODO Create a new Todo
  // Creates a new Todo

  res.json({ data: "New Todo created" });
});

router.patch("/:id", (req, res, next) => {
  // TODO Update :id Todo
  // Updates a Todo
  const id = req.params.id;
  console.log(id)

  res.json({ data: { id: id, name: `Todo list #${id}`, todos: [] } });
});

module.exports = router;
