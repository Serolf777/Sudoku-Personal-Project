import React, { useEffect, useState } from "react";
import InputSquare from "./InputSquare.js"
import ErrorList from "./ErrorList.js"
import translateServerErrors from "../services/translateServerErrors.js"

const BoxTile = (props) => {

  let allSquares = []
  let editedNumbers = []

  for(const box in props.edited){
    if(props.edited[box].length > 0){
      if(box === props.box){
        props.edited[box].forEach(number => {
          editedNumbers.push(number)
        })
      }
    }
  }

  props.puzzle.map( (square, index) => {
    if(square === 0 || editedNumbers.includes(index) ){
      allSquares.push(
        <InputSquare id={`square${index+1}`} name={`${index}`} handleInputChange={props.handleInputChange}/>
      )
    } else{
      allSquares.push(
      <div className={`cell small-4 square${index+1}`}>
        <h3>{props.puzzle[index]}</h3>
      </div>
      )
    }
    return (
      allSquares
    )
  })

  return(
    <div className='cell small-4 box'>
      <div className='boxName'>
        <h2>{props.box}</h2>
      </div>

      <div className="grid-x numbers">
          {allSquares[0]}
          {allSquares[1]}
          {allSquares[2]}
        </div>

        <div className="grid-x numbers">
          {allSquares[3]}
          {allSquares[4]}
          {allSquares[5]}

      </div>  

      <div className="grid-x numbers">
        {allSquares[6]}
        {allSquares[7]}
        {allSquares[8]}
      </div>
    </div>
  )

}

export default BoxTile