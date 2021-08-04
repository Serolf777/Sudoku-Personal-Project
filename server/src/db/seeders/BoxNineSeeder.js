import { BoxNine } from "../../models/index.js"

class BoxNineSeeder {
  static async seed() {
    const boxNineData = [
      {
        squareOne: 0,
        squareTwo: 9,
        squareThree: 0,
        squareFour: 0,
        squareFive: 0,
        squareSix: 4,
        squareSeven: 0,
        squareEight: 5,
        squareNine: 0,
        puzzleId: 1
      },
      {
        squareOne: 0,
        squareTwo: 0,
        squareThree: 0,
        squareFour: 0,
        squareFive: 0,
        squareSix: 7,
        squareSeven: 8,
        squareEight: 3,
        squareNine: 0,
        puzzleId: 2
      },
      {
        squareOne: 0,
        squareTwo: 7,
        squareThree: 0,
        squareFour: 5,
        squareFive: 0,
        squareSix: 3,
        squareSeven: 8,
        squareEight: 0,
        squareNine: 0,
        puzzleId: 3
      }
    ]

    for (const singleBox of boxNineData) {
      const currentBox = await BoxNine.query().findOne(singleBox)
      if (!currentBox) {
        await BoxNine.query().insert(singleBox)
      }
    }
  }
}

export default BoxNineSeeder