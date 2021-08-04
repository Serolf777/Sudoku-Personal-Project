import { BoxFive } from "../../models/index.js"

class BoxFiveSeeder {
  static async seed() {
    const boxFiveData = [
      {
        squareOne: 0,
        squareTwo: 0,
        squareThree: 0,
        squareFour: 8,
        squareFive: 9,
        squareSix: 0,
        squareSeven: 2,
        squareEight: 0,
        squareNine: 5,
        puzzleId: 1
      },
      {
        squareOne: 4,
        squareTwo: 5,
        squareThree: 0,
        squareFour: 0,
        squareFive: 0,
        squareSix: 0,
        squareSeven: 0,
        squareEight: 0,
        squareNine: 0,
        puzzleId: 2
      },
      {
        squareOne: 4,
        squareTwo: 0,
        squareThree: 6,
        squareFour: 0,
        squareFive: 8,
        squareSix: 0,
        squareSeven: 2,
        squareEight: 1,
        squareNine: 3,
        puzzleId: 3
      }
    ]

    for (const singleBox of boxFiveData) {
      const currentBox = await BoxFive.query().findOne(singleBox)
      if (!currentBox) {
        await BoxFive.query().insert(singleBox)
      }
    }
  }
}

export default BoxFiveSeeder