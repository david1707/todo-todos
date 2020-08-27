const express = require("express");

const router = express.Router();

const todosController = require("../controllers/todos");

router.get("/:id", todosController.getTodo);

router.post("/", todosController.postTodo);

router.patch("/:id", todosController.patchTodo);

module.exports = router;
