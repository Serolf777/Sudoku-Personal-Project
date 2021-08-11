import express from "express"

import RandomPuzzleClient from "../../../apiClient/RandomPuzzleClient.js"
import RandomPuzzleSerializer from "../../../serializers/RandomPuzzleSerializer.js"

const randomPuzzleRouter = new express.Router()

randomPuzzleRouter.get("/:difficulty", async (req, res) => {
  const difficulty = req.params.difficulty

  try {
    const puzzleResponse = await RandomPuzzleClient.getRandomPuzzle(difficulty)
    const puzzleData = JSON.parse(puzzleResponse)

    const serializedPuzzle = await RandomPuzzleSerializer.getDetail(puzzleData, difficulty)
    return res
      .set({ "Content-Type": "application/json" })
      .status(200)
      .json({puzzle: serializedPuzzle })
  } catch (error) {
    return res.status(401).json({ errors: error })
  }
})

export default randomPuzzleRouter