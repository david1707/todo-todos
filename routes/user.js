const express = require("express");

const router = express.Router();

const userController = require("../controllers/user");

// Profile
router.get("/profile", userController.getProfile);

router.patch("/profile", userController.patchProfile);

// Delete User
router.delete("/delete", userController.delete);

// Methods related to Todos
router.get("/todos", userController.getTodos);

router.get("/own-todos", userController.getOwnTodos);

module.exports = router;
