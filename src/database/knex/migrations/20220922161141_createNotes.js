exports.up = (knex) =>
  knex.schema.createTable("note", (table) => {
    table.increments("id");
    table.text("title");
    table.integer("user_id").references("id").inTable("user");
  });

exports.down = (knex) => knex.schema.dropTable("note");
