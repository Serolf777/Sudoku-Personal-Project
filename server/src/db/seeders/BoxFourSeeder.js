import { BoxFour } from "../../models/index.js"

class BoxFourSeeder {
  static async seed() {
    const boxFourData = [
      {
        squareOne: 1,
        squareTwo: 2,
        squareThree: 3,
        squareFour: 4,
        squareFive: 5,
        squareSix: 6,
        squareSeven: 7,
        squareEight: 8,
        squareNine: 9,
        puzzleId: 1
      },
      {
        squareOne: 1,
        squareTwo: 2,
        squareThree: 3,
        squareFour: 4,
        squareFive: 5,
        squareSix: 6,
        squareSeven: 7,
        squareEight: 8,
        squareNine: 9,
        puzzleId: 2
      },
      {
        squareOne: 1,
        squareTwo: 2,
        squareThree: 3,
        squareFour: 4,
        squareFive: 5,
        squareSix: 6,
        squareSeven: 7,
        squareEight: 8,
        squareNine: 9,
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