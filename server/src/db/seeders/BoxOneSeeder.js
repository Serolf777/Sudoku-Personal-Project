import { BoxOne } from "../../models/index.js"

class BoxOneSeeder {
  static async seed() {
    const boxOneData = [
      {
        squareOne: 9,
        squareTwo: 0,
        squareThree: 0,
        squareFour: 0,
        squareFive: 0,
        squareSix: 0,
        squareSeven: 6,
        squareEight: 0,
        squareNine: 0,
        puzzleId: 1
      },
      {
        squareOne: 2,
        squareTwo: 0,
        squareThree: 5,
        squareFour: 8,
        squareFive: 0,
        squareSix: 0,
        squareSeven: 0,
        squareEight: 9,
        squareNine: 0,
        puzzleId: 2
      },
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
        puzzleId: 3
      }
    ]

    for (const singleBox of boxOneData) {
      const currentBox = await BoxOne.query().findOne(singleBox)
      if (!currentBox) {
        await BoxOne.query().insert(singleBox)
      }
    }
  }
}

export default BoxOneSeeder