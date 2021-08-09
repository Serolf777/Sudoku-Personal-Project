import { Puzzle } from "../../models/index.js"

class PuzzleSeeder {
  static async seed() {
    const puzzlesData = [
      {
        difficulty: "easy-1"
      },
      {
        difficulty: "easy-2"
      },
      {
        difficulty: "easy-3"
      },
      {
        difficulty: "medium-1"
      },
      {
        difficulty: "medium-2"
      },
      {
        difficulty: "medium-3"
      },
      {
        difficulty: "hard-1"
      },
      {
        difficulty: "hard-2"
      },
      {
        difficulty: "hard-3"
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