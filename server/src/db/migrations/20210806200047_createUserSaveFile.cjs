/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("userSaveFiles", (table) => {
    table.bigIncrements("id")
    table.bigInteger("puzzleId").notNullable().unsigned().index().references("puzzles.id")
    table.text("savedPuzzle")
    table.text("puzzlesCompleted")
    table.bigInteger("userId").notNullable().unsigned().index().references("users.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("userSaveFiles")
}
