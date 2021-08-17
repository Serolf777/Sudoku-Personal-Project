import { Puzzle } from "../../models/index.js"

class PuzzleSeeder {
  static async seed() {
    const puzzlesData = [
      {
        difficulty: "Easy 1"
      },
      {
        difficulty: "Easy 2"
      },
      {
        difficulty: "Easy 3"
      },
      {
        difficulty: "Medium 1"
      },
      {
        difficulty: "Medium 2"
      },
      {
        difficulty: "Medium 3"
      },
      {
        difficulty: "Hard 1"
      },
      {
        difficulty: "Hard 2"
      },
      {
        difficulty: "Hard 3"
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