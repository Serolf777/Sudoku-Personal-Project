import { Puzzle } from "../../models/index.js"

class PuzzleSeeder {
  static async seed() {
    const puzzlesData = [
      {
        difficulty: "easy-1"
      },
      {
        difficulty: "normal-1"
      },
      {
        difficulty: "hard-1"
      }
    ]

    for (const singlePuzzle of puzzlesData) {
      const currentPuzzle= await Puzzle.query().findOne(singlePuzzle)
      if (!currentPuzzle) {
        await Puzzle.query().insert(singlePuzzle)
      }
    }
  }
}

export default PuzzleSeeder