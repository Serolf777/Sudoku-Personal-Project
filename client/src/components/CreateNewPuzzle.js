import React, { useEffect, useState } from "react";
import BoxTile from "./BoxTile.js"
import ErrorList from "./ErrorList.js"
import translateServerErrors from "../services/translateServerErrors.js"

const CreateNewPuzzle = (props) => {

  const [userCreatedPuzzle, setUserCreatedPuzzle] = useState({
    box1: [0,0,0,0,0,0,0,0,0],
    box2: [0,0,0,0,0,0,0,0,0],
    box3: [0,0,0,0,0,0,0,0,0],
    box4: [0,0,0,0,0,0,0,0,0],
    box5: [0,0,0,0,0,0,0,0,0],
    box6: [0,0,0,0,0,0,0,0,0],
    box7: [0,0,0,0,0,0,0,0,0],
    box8: [0,0,0,0,0,0,0,0,0],
    box9: [0,0,0,0,0,0,0,0,0]
})

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

useEffect(() => {
}, [])


let allBoxes= []

for(const box in userCreatedPuzzle) {
  const handleInputChange = (event) => {
     const squareNumber = event.currentTarget.name 
     let squaresInBox = userCreatedPuzzle[box]
     squaresInBox[squareNumber] = event.currentTarget.value
     setUserCreatedPuzzle({
       ...userCreatedPuzzle,
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
        puzzle={userCreatedPuzzle[box]}
        handleInputChange={handleInputChange}
      />
    )
  }

  const id = props.userId

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch(`/api/v1/createNewPuzzle/${id}`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(userCreatedPuzzle)
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
      }
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  return(
      <div className="callout primary">
        <ErrorList errors={errors} />
        <div className="difficulty">
          <h2>Create New Puzzle!</h2>
        </div>
        <form>
          <div className="grid-x">
            {allBoxes}
          </div>
          <input className="submit"
            type="submit"
            onClick={handleSubmit}
            value="Submit Your Puzzle!"
          />
        </form>
      </div>
  )

}

export default CreateNewPuzzle