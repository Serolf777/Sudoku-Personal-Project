import express from "express";
import objection from "objection"
const { ValidationError } = objection
import passport from "passport";
import { User, UserSaveFile } from "../../../models/index.js";
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

    if(userSaveFile.createdPuzzles === undefined){
      userSaveFile.createdPuzzles = []
      userSaveFile.createdPuzzles.push(serializedformInput)
      console.log(userSaveFile.puzzleId)
    } else {
      userSaveFile.createdPuzzles.push(serializedformInput)
    }

    console.log(userSaveFile)

    const newSave = await UserSaveFile.query().insertAndFetch(userSaveFile)

    console.log(newSave)

    return res.status(200).json({ userCreatedPuzzle: newSave })
    
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(422).json({ errors: error });
  }
});

export default createNewPuzzleRouter;