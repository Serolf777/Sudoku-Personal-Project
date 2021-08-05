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
        BoxNine,
        Boxes
      } = require("./index.js")
    
    return {
      boxOne: {
        relation: Model.HasOneRelation,
        modelClass: BoxOne,
        join: {
          from: "puzzles.id",
          to: "boxOne.puzzleId"
        }
      },
      boxTwo: {
        relation: Model.HasOneRelation,
        modelClass: BoxTwo,
        join: {
          from: "puzzles.id",
          to: "boxTwo.puzzleId"
        }
      },
      boxThree: {
        relation: Model.HasOneRelation,
        modelClass: BoxThree,
        join: {
          from: "puzzles.id",
          to: "boxThree.puzzleId"
        }
      },
      boxFour: {
        relation: Model.HasOneRelation,
        modelClass: BoxFour,
        join: {
          from: "puzzles.id",
          to: "boxFour.puzzleId"
        }
      },
      boxFive: {
        relation: Model.HasOneRelation,
        modelClass: BoxFive,
        join: {
          from: "puzzles.id",
          to: "boxFive.puzzleId"
        }
      },
      boxSix: {
        relation: Model.HasOneRelation,
        modelClass: BoxSix,
        join: {
          from: "puzzles.id",
          to: "boxSix.puzzleId"
        }
      },
      boxSeven: {
        relation: Model.HasOneRelation,
        modelClass: BoxSeven,
        join: {
          from: "puzzles.id",
          to: "boxSeven.puzzleId"
        }
      },
      boxEight: {
        relation: Model.HasOneRelation,
        modelClass: BoxEight,
        join: {
          from: "puzzles.id",
          to: "boxEight.puzzleId"
        }
      },
      boxNine: {
        relation: Model.HasOneRelation,
        modelClass: BoxNine,
        join: {
          from: "puzzles.id",
          to: "boxNine.puzzleId"
        }
      },
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