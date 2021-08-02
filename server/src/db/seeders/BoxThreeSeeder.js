import { BoxThree } from "../../models/index.js"

class BoxThreeSeeder {
  static async seed() {
    const boxThreeData = [
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

    for (const singleBox of boxThreeData) {
      const currentBox = await BoxThree.query().findOne(singleBox)
      if (!currentBox) {
        await BoxThree.query().insert(singleBox)
      }
    }
  }
}

export default BoxThreeSeeder