const { Router } = require("express");

const UserController = require("../controllers/UserController");

const userController = new UserController();

const userRoutes = Router();

userRoutes.post("/user", userController.create);

module.exports = userRoutes;
