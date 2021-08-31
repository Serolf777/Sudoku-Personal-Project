import React, { useEffect, useState } from "react";
import BoxTile from "./BoxTile.js"

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

  const handleSubmit = async (event) => {
    event.preventDefault()
  }

  return(
      <div className="callout primary">
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