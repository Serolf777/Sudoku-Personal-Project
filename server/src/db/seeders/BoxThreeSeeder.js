import { BoxThree } from "../../models/index.js"

class BoxThreeSeeder {
  static async seed() {
    const boxThreeData = [
      {
        squareOne: 0,
        squareTwo: 0,
        squareThree: 8,
        squareFour: 0,
        squareFive: 7,
        squareSix: 0,
        squareSeven: 1,
        squareEight: 3,
        squareNine: 0,
        puzzleId: 1
      },
      {
        squareOne: 0,
        squareTwo: 8,
        squareThree: 0,
        squareFour: 3,
        squareFive: 4,
        squareSix: 5,
        squareSeven: 1,
        squareEight: 0,
        squareNine: 0,
        puzzleId: 2
      },
      {
        squareOne: 6,
        squareTwo: 8,
        squareThree: 0,
        squareFour: 0,
        squareFive: 4,
        squareSix: 5,
        squareSeven: 1,
        squareEight: 0,
        squareNine: 7,
        puzzleId: 3
      }
    ]

    for (const singleBox of boxThreeData) {
      const currentBox = await BoxThree.query().findOne(singleBox)
      if (!currentBox) {
        await BoxThree.query().insert(singleBox)
      }
    }
  }
}

export default BoxThreeSeeder