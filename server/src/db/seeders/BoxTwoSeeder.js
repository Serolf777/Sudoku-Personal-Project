import { BoxTwo } from "../../models/index.js"

class BoxTwoSeeder {
  static async seed() {
    const boxTwoData = [
      {
        squareOne: 0,
        squareTwo: 0,
        squareThree: 0,
        squareFour: 0,
        squareFive: 0,
        squareSix: 8,
        squareSeven: 0,
        squareEight: 0,
        squareNine: 0,
        puzzleId: 1
      },
      {
        squareOne: 0,
        squareTwo: 3,
        squareThree: 0,
        squareFour: 0,
        squareFive: 0,
        squareSix: 0,
        squareSeven: 0,
        squareEight: 5,
        squareNine: 8,
        puzzleId: 2
      },
      {
        squareOne: 2,
        squareTwo: 4,
        squareThree: 0,
        squareFour: 0,
        squareFive: 0,
        squareSix: 0,
        squareSeven: 0,
        squareEight: 0,
        squareNine: 0,
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