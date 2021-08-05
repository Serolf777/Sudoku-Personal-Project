import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ErrorList from "./ErrorList.js"
import translateServerErrors from "../services/translateServerErrors.js"
import BoxTile from "./BoxTile"

const puzzleShow = (props) => {
  const [puzzle, setPuzzle] = useState([])

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

  const handleInputChange = (event) => {
    setPuzzle({
      ...puzzle,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
  }

  let boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine
  if(puzzle.boxes !== undefined) {
    boxOne = 
    <BoxTile
      box="box1"
      puzzle={puzzle.boxes.box1} 
      handleInputChange={handleInputChange}
    />

    boxTwo=
    <BoxTile
      box="box2"
      puzzle={puzzle.boxes.box2}
      handleInputChange={handleInputChange}
    />

    boxThree=
    <BoxTile
      box="box3" 
      puzzle={puzzle.boxes.box3}
      handleInputChange={handleInputChange}
    />

    boxFour=
    <BoxTile
      box="box4"
      puzzle={puzzle.boxes.box4}
      handleInputChange={handleInputChange}
    />

    boxFive=
    <BoxTile
      box="box5"
      puzzle={puzzle.boxes.box5}
      handleInputChange={handleInputChange}
    />

    boxSix=
    <BoxTile
      box="box6"
      puzzle={puzzle.boxes.box6}
      handleInputChange={handleInputChange}
    />

    boxSeven=
    <BoxTile
      box="box7"
      puzzle={puzzle.boxes.box7}
      handleInputChange={handleInputChange}
    />

    boxEight=
    <BoxTile
      box="box8"
      puzzle={puzzle.boxes.box8}
      handleInputChange={handleInputChange}
    />

    boxNine=
    <BoxTile
      box={"box9"}
      puzzle={puzzle.boxes.box9}
      handleInputChange={handleInputChange}
    />
  }


  return(
    <div className="callout primary">
      <h2>{puzzle.difficulty}</h2>
      <form onSubmit={handleSubmit}>    

        <div className="grid-x">
          {boxOne}
          {boxTwo}
          {boxThree}
        </div>
        <div className="grid-x">
          {boxFour}
          {boxFive}
          {boxSix}
        </div>
        <div className="grid-x">
          {boxSeven}
          {boxEight}
          {boxNine}
        </div>

      <input className="submit"
        type="submit"
        value="Submit Attempt"
      />

      </form>
      
    </div>
  )
}

export default puzzleShow
