import { BoxFour } from "../../models/index.js"

class BoxFourSeeder {
  static async seed() {
    const boxFourData = [
      {
        squareOne: 2,
        squareTwo: 0,
        squareThree: 5,
        squareFour: 0,
        squareFive: 4,
        squareSix: 6,
        squareSeven: 0,
        squareEight: 9,
        squareNine: 8,
        puzzleId: 1
      },
      {
        squareOne: 3,
        squareTwo: 0,
        squareThree: 2,
        squareFour: 4,
        squareFive: 0,
        squareSix: 0,
        squareSeven: 0,
        squareEight: 0,
        squareNine: 0,
        puzzleId: 2
      },
      {
        squareOne: 0,
        squareTwo: 0,
        squareThree: 0,
        squareFour: 0,
        squareFive: 5,
        squareSix: 0,
        squareSeven: 0,
        squareEight: 0,
        squareNine: 0,
        puzzleId: 3
      }
    ]

    for (const singleBox of boxFourData) {
      const currentBox = await BoxFour.query().findOne(singleBox)
      if (!currentBox) {
        await BoxFour.query().insert(singleBox)
      }
    }
  }
}

export default BoxFourSeeder