import express from "express";
import objection from "objection"
const { ValidationError } = objection
import passport from "passport";
import { User, UserSaveFile, Puzzle, Boxes } from "../../../models/index.js";
import validatePuzzleSquares from "../../../services/validatePuzzleSquares.js"

const createNewPuzzleRouter = new express.Router();

createNewPuzzleRouter.post("/:id", async (req, res) => {
  const body = req.body
  const userId = req.user.id

  const user = await User.query().findById(userId)
  const userSaveFile = await user.$relatedQuery("userSaveFile")

  const formInput = validatePuzzleSquares(body)

  try {
    let serializedformInput = JSON.stringify(formInput);
    let puzzle = {}
    puzzle.userId = userId
    puzzle.difficulty = "User Made"

    const newPuzzle = await Puzzle.query().insertAndFetch(puzzle)

    let boxes = {}
    boxes.allBoxes = serializedformInput
    boxes.puzzleId = parseInt(newPuzzle.id)

    const newBox = await Boxes.query().insertAndFetch(boxes)

    return res.status(200).json({ userCreatedPuzzle: newPuzzle })
    
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(422).json({ errors: error });
  }
});

export default createNewPuzzleRouter;