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
        BoxOne, 
        BoxTwo, 
        BoxThree, 
        BoxFour, 
        BoxFive, 
        BoxSix, 
        BoxSeven, 
        BoxEight, 
        BoxNine
      } = require("./index.js")
    
    return {
      boxone: {
        relation: Model.HasOneRelation,
        modelClass: BoxOne,
        join: {
          from: "puzzles.id",
          to: "boxone.puzzleId"
        }
      },
      boxtwo: {
        relation: Model.HasOneRelation,
        modelClass: BoxTwo,
        join: {
          from: "puzzles.id",
          to: "boxtwo.puzzleId"
        }
      },
      boxthree: {
        relation: Model.HasOneRelation,
        modelClass: BoxThree,
        join: {
          from: "puzzles.id",
          to: "boxthree.puzzleId"
        }
      },
      boxfour: {
        relation: Model.HasOneRelation,
        modelClass: BoxFour,
        join: {
          from: "puzzles.id",
          to: "boxfour.puzzleId"
        }
      },
      boxfive: {
        relation: Model.HasOneRelation,
        modelClass: BoxFive,
        join: {
          from: "puzzles.id",
          to: "boxfive.puzzleId"
        }
      },
      boxsix: {
        relation: Model.HasOneRelation,
        modelClass: BoxSix,
        join: {
          from: "puzzles.id",
          to: "boxsix.puzzleId"
        }
      },
      boxseven: {
        relation: Model.HasOneRelation,
        modelClass: BoxSeven,
        join: {
          from: "puzzles.id",
          to: "boxseven.puzzleId"
        }
      },
      boxeight: {
        relation: Model.HasOneRelation,
        modelClass: BoxEight,
        join: {
          from: "puzzles.id",
          to: "boxeight.puzzleId"
        }
      },
      boxnine: {
        relation: Model.HasOneRelation,
        modelClass: BoxNine,
        join: {
          from: "puzzles.id",
          to: "boxnine.puzzleId"
        }
      }

    }

  }
}

module.exports = Puzzle