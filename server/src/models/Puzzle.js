const Model = require("./Model.js")

class Puzzle extends Model {
  static get tableName() {
    return "puzzles"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["difficulty"],
      properties: {
        difficulty: {type: "string"}
      }
    }
  }

  static get relationMappings() {
    const {
        Boxes
      } = require("./index.js")
    
    return {
      boxes: {
        relation: Model.HasOneRelation,
        modelClass: Boxes,
        join: {
          from: "puzzles.id",
          to: "boxes.puzzleId"
        }
      }
    }
  }
}

module.exports = Puzzle