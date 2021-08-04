import React, { useEffect, useState } from "react";
import InputBox from "./InputBox.js"

const BoxTile = (props) => {

  let squareOne
  let squareTwo
  let squareThree
  let squareFour
  let squareFive
  let squareSix
  let squareSeven
  let squareEight
  let squareNine

  if(props.puzzle.squareOne === 0){
    squareOne =
    <InputBox id="boxone" name="boxone"/>
  }
  else{
    squareOne =
    <div className="cell small-4">
      <h3>{props.puzzle.squareOne}</h3>
    </div>
  }

  if(props.puzzle.squareTwo === 0){
    squareTwo =
    <InputBox id="boxtwo" name="boxtwo"/>
  }
  else{
    squareTwo =
    <div className="cell small-4">
      <h3>{props.puzzle.squareTwo}</h3>
    </div>
  }

  if(props.puzzle.squareThree === 0){
    squareThree =
    <InputBox id="boxthree" name="boxthree"/>
  }
  else{
    squareThree =
    <div className="cell small-4">
      <h3>{props.puzzle.squareThree}</h3>
    </div>
  }

  if(props.puzzle.squareFour === 0){
    squareFour =
    <InputBox id="boxfour" name="boxfour"/>
  }
  else{
    squareFour =
    <div className="cell small-4">
      <h3>{props.puzzle.squareFour}</h3>
    </div>
  }

  if(props.puzzle.squareFive === 0){
    squareFive =
    <InputBox id="boxfive" name="boxfive"/>
  }
  else{
    squareFive =
    <div className="cell small-4">
      <h3>{props.puzzle.squareFive}</h3>
    </div>
  }

  if(props.puzzle.squareSix === 0){
    squareSix =
    <InputBox id="boxsix" name="boxsix"/>
  }
  else{
    squareSix =
    <div className="cell small-4">
      <h3>{props.puzzle.squareSix}</h3>
    </div>
  }

  if(props.puzzle.squareSeven === 0){
    squareSeven =
    <InputBox id="boxseven" name="boxseven"/>
  }
  else{
    squareSeven =
    <div className="cell small-4">
      <h3>{props.puzzle.squareSeven}</h3>
    </div>
  }

  if(props.puzzle.squareEight === 0){
    squareEight =
    <InputBox id="boxeight" name="boxeight"/>
  }
  else{
    squareEight =
    <div className="cell small-4">
      <h3>{props.puzzle.squareEight}</h3>
    </div>
  }

  if(props.puzzle.squareNine === 0){
    squareNine =
    <InputBox id="boxnine" name="boxnine"/>
  }
  else{
    squareNine =
    <div className="cell small-4">
      <h3>{props.puzzle.squareNine}</h3>
    </div>
  }

  return(
    <div className='cell small-4'>
      <h2>{props.box}</h2>

      <div className="grid-x">
          {squareOne}
          {squareTwo}
          {squareThree}
        </div>

        <div className="grid-x">
          {squareFour}
          {squareFive}
          {squareSix}

      </div>  

      <div className="grid-x">
        {squareSeven}
        {squareEight}
        {squareNine}
      </div>
    </div>
  )

}

export default BoxTile