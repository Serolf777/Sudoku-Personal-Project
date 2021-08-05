const Model = require("./Model.js")

class BoxEight extends Model {
  static get tableName() {
    return "boxEight"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "squareOne", 
        "squareTwo", 
        "squareThree", 
        "squareFour", 
        "squareFive", 
        "squareSix", 
        "squareSeven",
        "squareEight", 
        "squareNine", 
        "puzzleId"
      ],
      properties: {
        squareOne: { type: "integer"},
        squareTwo: { type: "integer"},
        squareThree: { type: "integer"},
        squareFour: { type: "integer"},
        squareFive: { type: "integer"},
        squareSix: { type: "integer"},
        squareSeven: { type: "integer"},
        squareEight: { type: "integer"},
        squareNine: { type: "integer"},
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
          from: "boxEight.puzzleId",
          to: "puzzles.id"
        }
      }
    }
  }
}

module.exports = BoxEight