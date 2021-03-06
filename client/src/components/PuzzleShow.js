import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ErrorList from "./ErrorList.js"
import translateServerErrors from "../services/translateServerErrors.js"
import BoxTile from "./BoxTile.js"
import useLoadedSave from "../services/useLoadedSave.js";

const PuzzleShow = (props) => {
  const [puzzle, setPuzzle] = useState({})

  const [userSaveFile, setUserSaveFile] = useState({
    box1: [ ],
    box2: [ ],
    box3: [ ],
    box4: [ ],
    box5: [ ],
    box6: [ ],
    box7: [ ],
    box8: [ ],
    box9: [ ]
})

  const [solved, setSolved] = useState('')
  const [solvedDiv, setSolvedDiv] = useState('hidden')
  const [loadedSave, setLoadedSave] = useState('')
  const [loadedSaveDiv, setLoadedSaveDiv] = useState('hidden')

  const [edited, setEdited] = useState({
    box1: [ ],
    box2: [ ],
    box3: [ ],
    box4: [ ],
    box5: [ ],
    box6: [ ],
    box7: [ ],
    box8: [ ],
    box9: [ ]
  })

  const [errors, setErrors] = useState([])

  const { id } = useParams()

  const getPuzzle = async () => {
    try {
      const response = await fetch(`/api/v1/puzzles/${id}`)
      if(!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const body = await response.json()
      setPuzzle(body.puzzle)

    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getPuzzle()
  }, [])

  const handleLoadSave = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(`/api/v1/userSaveFile/${id}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
      })
      if(!response.ok) {
        if(response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status}: (${response.statusText})`
          const error = new Error(errorMessage)
          throw(error)
        }
      } else {
        const userSaveFileData = await response.json()
        const userPuzzleSave = JSON.parse(userSaveFileData.userSaveFile.savedPuzzle)
        if(userPuzzleSave){
          setLoadedSave("Your save file was loaded.")
          setLoadedSaveDiv('loaded')
          useLoadedSave(userPuzzleSave)
          setSolvedDiv('hidden')
        } else {
          setLoadedSave("There was an unknown issue with saved data.")
          setLoadedSaveDiv('notLoaded')
        }
      }
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
      setLoadedSave("There was no previous save file found.")
      setLoadedSaveDiv('notLoaded')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch(`/api/v1/userSaveFile/${id}`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(userSaveFile)
      })
      if(!response.ok) {
        if(response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status}: (${response.statusText})`
          const error = new Error(errorMessage)
          throw(error)
        }
      } else {
        const userSaveFileData = await response.json()
        if(userSaveFileData.userSaveFile){
          setSolved("It's RIGHT! You're so smart.")
          setSolvedDiv('solved')
          setLoadedSaveDiv('hidden')
        } else {
          setSolved("It's WRONG! Try again.")
          setSolvedDiv('notSolved')
          setLoadedSaveDiv('hidden')
        }
      }
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  let allBoxes = []

  if(puzzle.boxes !== undefined) {
    for(const box in puzzle.boxes) {
       const handleInputChange = (event) => {
          const squareNumber = event.currentTarget.name 
          let squaresInBox = puzzle.boxes[box]
          squaresInBox[squareNumber] = event.currentTarget.value
          setUserSaveFile({
            ...userSaveFile,
            [box]: squaresInBox
          })

          setEdited({
            ...edited,
            [box]: [...edited[box],parseInt(squareNumber)]
          })
        }
      
      allBoxes.push(
        <BoxTile
          box={box}
          edited={edited}
          puzzle={puzzle.boxes[box]}
          handleInputChange={handleInputChange}
        />
      )
    }
  }

  return(
    <div className="callout primary">
      <div className={`${loadedSaveDiv} buttonStyled`}>
        <h3>{loadedSave}</h3>
      </div>

      <div className={solvedDiv}>
        <h3>{solved}</h3>
      </div>

      <div className="difficulty">
        <h2>{puzzle.difficulty}</h2>
      </div>

      <ErrorList errors={errors} />
      <form>
        <div className="grid-x">
          {allBoxes}
        </div>

        <input className="load-save"
          type="submit"
          onClick={handleLoadSave}
          value="Load Save"
        />

        <input className="submit"
          type="submit"
          onClick={handleSubmit}
          value="Submit Attempt"
        />
      </form>
    </div>
  )
}

export default PuzzleShow