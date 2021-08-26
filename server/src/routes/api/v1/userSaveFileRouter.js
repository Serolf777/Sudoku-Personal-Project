import express from "express"
import { UserSaveFile } from "../../../models/index.js"
import { User } from "../../../models/index.js"
import objection from "objection"
const { ValidationError } = objection
import cleanUserInput from "../../../services/cleanUserInput.js"
import checkSubmission from "../../../services/checkSubmission.js"
import cleanUserSubmission from "../../../services/validatePuzzleSquares.js"

const userSaveFileRouter = new express.Router()

userSaveFileRouter.get("/:id", async (req, res) => {
  const userId = req.user.id
  const puzzleId = req.params.id

  try {
    const user = await User.query().findById(userId)
    const userSaveFile = await user.$relatedQuery("userSaveFile")

    let matchedSave = false
    userSaveFile.forEach(save => {
    if(save.puzzleId === puzzleId){
      matchedSave = save.id
    }
  })

  if(matchedSave === false){
    let userSave = "Unable to find"
    return res.status(200).json({ userSaveFile: userSave })
  } else {
    const userSave = await UserSaveFile.query().findById(matchedSave)
    return res.status(200).json({ userSaveFile: userSave })
  }

  } catch(error) {
    let userSave = "Unable to find"
    return res.status(500).json({ userSaveFile: userSave })
  }
})

userSaveFileRouter.post("/:id", async (req, res) => {
  const body = req.body
  const puzzleId = req.params.id
  const userId = req.user.id
  let correctlySolved = false
  
  const formInput = cleanUserSubmission(body)
  let serializedformInput = JSON.stringify(formInput);

  let userSave = {}
  userSave.savedPuzzle = serializedformInput
  userSave.userId = userId
  userSave.puzzleId = puzzleId

  const user = await User.query().findById(userId)
  const userSaveFile = await user.$relatedQuery("userSaveFile")

  let matchedSave = false
  userSaveFile.forEach(save => {
    if(save.puzzleId === puzzleId){
      matchedSave = save.id
    }
  })

  if(matchedSave === false){
    try {
      const newSave = await UserSaveFile.query().insertAndFetch(userSave)
      const checkPuzzle = new checkSubmission(formInput)

      if(checkPuzzle.isCorrect){
          correctlySolved = true
        }
        else{
          correctlySolved = false
        }

      return res.status(200).json({ userSaveFile: correctlySolved })
    } catch(error) {
      if(error instanceof ValidationError) {
        return res.status(422).json({errors: error.data})
      }
      return res.status(500).json({ error })
    }
  }
  else{
    try {
      const updateSave = await UserSaveFile.query().updateAndFetchById(matchedSave, {
        savedPuzzle: userSave.savedPuzzle
      })
      const checkPuzzle = new checkSubmission(formInput)

      if(checkPuzzle.checkBox() && checkPuzzle.checkRow()){
          correctlySolved = true
        }
        else{
          correctlySolved = false
        }

      return res.status(200).json({ userSaveFile: correctlySolved  })
    } catch(error) {
      if(error instanceof ValidationError) {
        return res.status(422).json({errors: error.data})
      }
      console.log(error)
      return res.status(500).json({ error })
    }
  }


})

export default userSaveFileRouter