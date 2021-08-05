/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  return knex.schema.createTable("boxSix", (table) => {
    table.bigIncrements("id")
    table.integer("squareOne").notNullable()
    table.integer("squareTwo").notNullable()
    table.integer("squareThree").notNullable()
    table.integer("squareFour").notNullable()
    table.integer("squareFive").notNullable()
    table.integer("squareSix").notNullable()
    table.integer("squareSeven").notNullable()
    table.integer("squareEight").notNullable()
    table.integer("squareNine").notNullable()
    table.bigInteger("puzzleId").notNullable().unsigned().index().references("puzzles.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("boxSix")
}
