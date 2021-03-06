import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ErrorList from "./ErrorList.js"
import translateServerErrors from "../services/translateServerErrors.js"
import BoxTile from "./BoxTile.js"

const RandomPuzzleShow = (props) => {
  const [puzzle, setPuzzle] = useState([])

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
  const [solvedDiv, setSolvedDiv] = useState('')

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

  const { difficulty } = useParams()

  const getPuzzle = async () => {
    try {
      const response = await fetch(`/api/v1/randomPuzzle/${difficulty}`)
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
        } else {
          setSolved("It's WRONG! Try again.")
          setSolvedDiv('notSolved')
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
      <div className={solvedDiv}>
        <h3>{solved}</h3>
      </div>

      <div className="difficulty">
        <h2>{puzzle.difficulty}</h2>
      </div>
      
      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit}>    

        <div className="grid-x">
          {allBoxes[0]}
          {allBoxes[1]}
          {allBoxes[2]}
        </div>
        <div className="grid-x">
          {allBoxes[3]}
          {allBoxes[4]}
          {allBoxes[5]}
        </div>
        <div className="grid-x">
          {allBoxes[6]}
          {allBoxes[7]}
          {allBoxes[8]}
        </div>

        {/* <input className="submit"
        type="submit"
        value="Submit Attempt"
        /> */}
      </form>
      
    </div>
  )
}

export default RandomPuzzleShow