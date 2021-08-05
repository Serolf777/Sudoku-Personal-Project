import React, { useEffect, useState } from "react";
import InputBox from "./InputBox.js"

const BoxTile = (props) => {

  let squareOne, squareTwo, squareThree, 
      squareFour, squareFive, squareSix, 
      squareSeven, squareEight, squareNine


  if(props.puzzle.squareOne === 0){
    squareOne =
    <InputBox id="boxOne" name="boxOne"/>
  }
  else{
    squareOne =
    <div className="cell small-4">
      <h3>{props.puzzle.squareOne}</h3>
    </div>
  }

  if(props.puzzle.squareTwo === 0){
    squareTwo =
    <InputBox id="boxTwo" name="boxTwo"/>
  }
  else{
    squareTwo =
    <div className="cell small-4">
      <h3>{props.puzzle.squareTwo}</h3>
    </div>
  }

  if(props.puzzle.squareThree === 0){
    squareThree =
    <InputBox id="boxThree" name="boxThree"/>
  }
  else{
    squareThree =
    <div className="cell small-4">
      <h3>{props.puzzle.squareThree}</h3>
    </div>
  }

  if(props.puzzle.squareFour === 0){
    squareFour =
    <InputBox id="boxFour" name="boxFour"/>
  }
  else{
    squareFour =
    <div className="cell small-4">
      <h3>{props.puzzle.squareFour}</h3>
    </div>
  }

  if(props.puzzle.squareFive === 0){
    squareFive =
    <InputBox id="boxFive" name="boxFive"/>
  }
  else{
    squareFive =
    <div className="cell small-4">
      <h3>{props.puzzle.squareFive}</h3>
    </div>
  }

  if(props.puzzle.squareSix === 0){
    squareSix =
    <InputBox id="boxSix" name="boxSix"/>
  }
  else{
    squareSix =
    <div className="cell small-4">
      <h3>{props.puzzle.squareSix}</h3>
    </div>
  }

  if(props.puzzle.squareSeven === 0){
    squareSeven =
    <InputBox id="boxSeven" name="boxSeven"/>
  }
  else{
    squareSeven =
    <div className="cell small-4">
      <h3>{props.puzzle.squareSeven}</h3>
    </div>
  }

  if(props.puzzle.squareEight === 0){
    squareEight =
    <InputBox id="boxEight" name="boxEight"/>
  }
  else{
    squareEight =
    <div className="cell small-4">
      <h3>{props.puzzle.squareEight}</h3>
    </div>
  }

  if(props.puzzle.squareNine === 0){
    squareNine =
    <InputBox id="boxNine" name="boxNine"/>
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