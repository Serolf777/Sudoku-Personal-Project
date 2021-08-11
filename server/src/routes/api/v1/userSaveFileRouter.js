import express from "express"
import { UserSaveFile } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const userSaveFileRouter = new express.Router()

userSaveFileRouter.get("/:id", async (req, res) => {
  const userId = req.params.id
  try {
    const saveFile = await UserSaveFile.query().findById(userId)

    return res.status(200).json({ userSaveFile: saveFile })
  } catch(error) {
    return res.status(500).json({ error })
  }
})

userSaveFileRouter.post("/:id", async (req, res) => {
  const body = req.body
  const puzzlesId = req.params.id
  const userId = req.user.id
  
  const formInput = cleanUserInput(body)
  let serializedformInput = JSON.stringify(formInput);

  let userSave = {}
  userSave.savedPuzzle = serializedformInput
  userSave.userId = userId
  userSave.puzzlesId = puzzlesId

  try {
    const newSave = await UserSaveFile.query().insertAndFetch(userSave)
    return res.status(200).json({ userSaveFile: newSave })
  } catch(error) {
    return res.status(500).json({ error })
  }
})

export default userSaveFileRouter