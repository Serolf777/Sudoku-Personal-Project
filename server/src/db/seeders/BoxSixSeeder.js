import { BoxSix } from "../../models/index.js"

class BoxSixSeeder {
  static async seed() {
    const boxSixData = [
      {
        squareOne: 7,
        squareTwo: 8,
        squareThree: 9,
        squareFour: 1,
        squareFive: 2,
        squareSix: 0,
        squareSeven: 3,
        squareEight: 0,
        squareNine: 0,
        puzzleId: 1
      },
      {
        squareOne: 6,
        squareTwo: 9,
        squareThree: 0,
        squareFour: 7,
        squareFive: 2,
        squareSix: 3,
        squareSeven: 5,
        squareEight: 1,
        squareNine: 0,
        puzzleId: 2
      },
      {
        squareOne: 0,
        squareTwo: 0,
        squareThree: 8,
        squareFour: 0,
        squareFive: 0,
        squareSix: 0,
        squareSeven: 0,
        squareEight: 4,
        squareNine: 0,
        puzzleId: 3
      }
    ]

    for (const singleBox of boxSixData) {
      const currentBox = await BoxSix.query().findOne(singleBox)
      if (!currentBox) {
        await BoxSix.query().insert(singleBox)
      }
    }
  }
}

export default BoxSixSeeder