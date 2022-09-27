const { Router } = require("express");

const NoteController = require("../controllers/NoteController");

const noteController = new NoteController();

const noteRoutes = Router();

noteRoutes.get("/:user_id", noteController.index);
noteRoutes.post("/:user_id", noteController.create);
noteRoutes.delete("/:id", noteController.delete);

module.exports = noteRoutes;
