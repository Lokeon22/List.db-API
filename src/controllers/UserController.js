const sqliteConnection = require("../database/sqlite");

class UserController {
  async create(req, res) {
    const { email, password } = req.body;
    const database = await sqliteConnection();

    await database.run(`INSERT INTO user (email, password) VALUES (?, ?)`, [
      email,
      password,
    ]);

    return res.json({ status: "Usuario criado com sucesso!" });
  }
}

module.exports = UserController;
