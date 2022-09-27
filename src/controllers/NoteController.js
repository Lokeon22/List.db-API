const knex = require("../database/knex");

class NoteController {
  async create(req, res) {
    const { title } = req.body;
    const { user_id } = req.params;

    await knex("note").insert({ title, user_id });

    res.json();
  }

  async index(req, res) {
    const { user_id } = req.params;

    const note = await knex("note").where({ user_id });

    const teste = note.map((notes) => {
      return { ...notes };
    });

    return res.json(teste);
  }

  async delete(req, res) {
    const { id } = req.params;

    await knex("note").del().where("id", id);

    return res.json("Nota deletetada");
  }
}

module.exports = NoteController;
