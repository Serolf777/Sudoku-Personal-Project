import React, { useEffect, useState } from "react";
import InputSquare from "./InputSquare.js"
import ErrorList from "./ErrorList.js"
import translateServerErrors from "../services/translateServerErrors.js"

const BoxTile = (props) => {

  let allSquares = []
  
  props.puzzle.map( (square, index) => {
    if(square === 0){
      allSquares.push(
        <InputSquare id={`square${index+1}`} name={`${index}`} handleInputChange={props.handleInputChange}/>
      )
    }
    else{
      allSquares.push(
      <div className="cell small-4">
        <h3>{props.puzzle[index]}</h3>
      </div>
      )
    }
    return (
      allSquares
    )
  })

  return(
    <div className='cell small-4'>
      <h2>{props.box}</h2>

      <div className="grid-x">
          {allSquares[0]}
          {allSquares[1]}
          {allSquares[2]}
        </div>

        <div className="grid-x">
          {allSquares[3]}
          {allSquares[4]}
          {allSquares[5]}

      </div>  

      <div className="grid-x">
        {allSquares[6]}
        {allSquares[7]}
        {allSquares[8]}
      </div>
    </div>
  )

}

export default BoxTile