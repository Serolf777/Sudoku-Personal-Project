import { BoxSeven } from "../../models/index.js"

class BoxSevenSeeder {
  static async seed() {
    const boxSevenData = [
      {
        squareOne: 0,
        squareTwo: 0,
        squareThree: 1,
        squareFour: 0,
        squareFive: 5,
        squareSix: 2,
        squareSeven: 9,
        squareEight: 0,
        squareNine: 7,
        puzzleId: 1
      },
      {
        squareOne: 0,
        squareTwo: 2,
        squareThree: 0,
        squareFour: 0,
        squareFive: 0,
        squareSix: 0,
        squareSeven: 9,
        squareEight: 0,
        squareNine: 0,
        puzzleId: 2
      },
      {
        squareOne: 0,
        squareTwo: 3,
        squareThree: 0,
        squareFour: 8,
        squareFive: 0,
        squareSix: 0,
        squareSeven: 0,
        squareEight: 0,
        squareNine: 0,
        puzzleId: 3
      }
    ]

    for (const singleBox of boxSevenData) {
      const currentBox = await BoxSeven.query().findOne(singleBox)
      if (!currentBox) {
        await BoxSeven.query().insert(singleBox)
      }
    }
  }
}

export default BoxSevenSeeder