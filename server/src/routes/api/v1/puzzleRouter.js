import express from "express"
import { Puzzle } from "../../../models/index.js"
import PuzzleSerializer from "../../../serializers/puzzleSerializer.js"

const puzzleRouter = new express.Router()

puzzleRouter.get("/:id", async (req, res) => {
  try {
    const puzzleId = req.params.id
    const puzzle = await Puzzle.query().findById(puzzleId)
    const serializedPuzzle = await PuzzleSerializer.getDetail(puzzle)

    return res.status(200).json({ puzzle: serializedPuzzle })
  } catch(error) {
    return res.status(500).json({ error })
  }
})

export default puzzleRouter