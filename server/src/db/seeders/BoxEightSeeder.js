import { BoxEight } from "../../models/index.js"

class BoxEightSeeder {
  static async seed() {
    const boxEightData = [
      {
        squareOne: 6,
        squareTwo: 0,
        squareThree: 7,
        squareFour: 0,
        squareFive: 8,
        squareSix: 0,
        squareSeven: 0,
        squareEight: 0,
        squareNine: 3,
        puzzleId: 1
      },
      {
        squareOne: 0,
        squareTwo: 0,
        squareThree: 0,
        squareFour: 9,
        squareFive: 0,
        squareSix: 0,
        squareSeven: 6,
        squareEight: 0,
        squareNine: 0,
        puzzleId: 2
      },
      {
        squareOne: 0,
        squareTwo: 0,
        squareThree: 1,
        squareFour: 0,
        squareFive: 0,
        squareSix: 0,
        squareSeven: 0,
        squareEight: 2,
        squareNine: 0,
        puzzleId: 3
      }
    ]

    for (const singleBox of boxEightData) {
      const currentBox = await BoxEight.query().findOne(singleBox)
      if (!currentBox) {
        await BoxEight.query().insert(singleBox)
      }
    }
  }
}

export default BoxEightSeeder