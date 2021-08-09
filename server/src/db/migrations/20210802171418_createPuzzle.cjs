/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("puzzles", (table) =>{
    table.bigIncrements("id")
    table.string("difficulty").notNullable()
    //table.json("puzzleBoard")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  })
}

// let newPuzzleBoard = [[123456,7,8], [123456]]
// await Puzzle.query().insert({difficulty: "easy", puzzleBoard: })

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("puzzles")
}
