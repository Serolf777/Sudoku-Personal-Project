import { BoxNine } from "../../models/index.js"

class BoxNineSeeder {
  static async seed() {
    const boxNineData = [
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

    for (const singleBox of boxNineData) {
      const currentBox = await BoxNine.query().findOne(singleBox)
      if (!currentBox) {
        await BoxNine.query().insert(singleBox)
      }
    }
  }
}

export default BoxNineSeeder