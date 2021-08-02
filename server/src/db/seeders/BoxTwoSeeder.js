import { BoxTwo } from "../../models/index.js"

class BoxTwoSeeder {
  static async seed() {
    const boxTwoData = [
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

    for (const singleBox of boxTwoData) {
      const currentBox = await BoxTwo.query().findOne(singleBox)
      if (!currentBox) {
        await BoxTwo.query().insert(singleBox)
      }
    }
  }
}

export default BoxTwoSeeder