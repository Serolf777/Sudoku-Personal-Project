const Model = require("./Model.js")

class BoxFive extends Model {
  static get tableName() {
    return "boxes"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "allBoxes",
        "puzzleId"
      ],
      properties: {
        boxes: { type: "text"},
        puzzleId: { type: "integer"}
      }
    }
  }

  static get relationMappings() {
    const { Puzzle } = require("./index.js")
    
    return {
      puzzle: {
        relation: Model.BelongsToOneRelation,
        modelClass: Puzzle,
        join: {
          from: "boxes.puzzleId",
          to: "puzzles.id"
        }
      }
    }
  }
}

module.exports = BoxFive