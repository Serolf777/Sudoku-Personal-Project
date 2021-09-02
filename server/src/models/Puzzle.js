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
        Boxes, UserSaveFile, User
      } = require("./index.js")
    
    return {
      boxes: {
        relation: Model.HasOneRelation,
        modelClass: Boxes,
        join: {
          from: "puzzles.id",
          to: "boxes.puzzleId"
        }
      },
      userSaveFile: {
        relation: Model.HasOneRelation,
        modelClass: UserSaveFile,
        join: {
          from: "puzzles.id",
          to: "userSaveFiles.puzzleId"
        }
      },
      user: {
        relation: Model.HasOneRelation,
        modelClass: User,
        join: {
          from: "puzzles.id",
          to: "users.puzzleId"
        }
      }
    }
  }
}

module.exports = Puzzle