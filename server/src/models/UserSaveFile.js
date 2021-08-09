const Model = require("./Model.js")

class UserSaveFile extends Model {
  static get tableName() {
    return "userSaveFiles"
  }

  static get relationMappings() {
    const { User, Puzzle } = require("./index.js")
    
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "userSaveFiles.userId",
          to: "users.id"
        }
      },
      puzzle: {
        relation: Model.BelongsToOneRelation,
        modelClass: Puzzle,
        join: {
          from: "userSaveFiles.puzzleId",
          to: "puzzles.id"
        }
      }
    }
  }



}

module.exports = UserSaveFile