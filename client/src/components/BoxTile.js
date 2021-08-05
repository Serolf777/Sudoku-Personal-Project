import React, { useEffect, useState } from "react";
import InputBox from "./InputBox.js"

const BoxTile = (props) => {

  let squareOne, squareTwo, squareThree, 
      squareFour, squareFive, squareSix, 
      squareSeven, squareEight, squareNine

      console.log(props.puzzle)


  if(props.puzzle[0] === 0){
    squareOne =
    <InputBox id="boxOne" name="boxOne"/>
  }
  else{
    squareOne =
    <div className="cell small-4">
      <h3>{props.puzzle[0]}</h3>
    </div>
  }

  if(props.puzzle[1] === 0){
    squareTwo =
    <InputBox id="boxTwo" name="boxTwo"/>
  }
  else{
    squareTwo =
    <div className="cell small-4">
      <h3>{props.puzzle[1]}</h3>
    </div>
  }

  if(props.puzzle[2] === 0){
    squareThree =
    <InputBox id="boxThree" name="boxThree"/>
  }
  else{
    squareThree =
    <div className="cell small-4">
      <h3>{props.puzzle[2]}</h3>
    </div>
  }

  if(props.puzzle[3] === 0){
    squareFour =
    <InputBox id="boxFour" name="boxFour"/>
  }
  else{
    squareFour =
    <div className="cell small-4">
      <h3>{props.puzzle[3]}</h3>
    </div>
  }

  if(props.puzzle[4] === 0){
    squareFive =
    <InputBox id="boxFive" name="boxFive"/>
  }
  else{
    squareFive =
    <div className="cell small-4">
      <h3>{props.puzzle[4]}</h3>
    </div>
  }

  if(props.puzzle[5] === 0){
    squareSix =
    <InputBox id="boxSix" name="boxSix"/>
  }
  else{
    squareSix =
    <div className="cell small-4">
      <h3>{props.puzzle[5]}</h3>
    </div>
  }

  if(props.puzzle[6] === 0){
    squareSeven =
    <InputBox id="boxSeven" name="boxSeven"/>
  }
  else{
    squareSeven =
    <div className="cell small-4">
      <h3>{props.puzzle[6]}</h3>
    </div>
  }

  if(props.puzzle[7] === 0){
    squareEight =
    <InputBox id="boxEight" name="boxEight"/>
  }
  else{
    squareEight =
    <div className="cell small-4">
      <h3>{props.puzzle[7]}</h3>
    </div>
  }

  if(props.puzzle[8] === 0){
    squareNine =
    <InputBox id="boxNine" name="boxNine"/>
  }
  else{
    squareNine =
    <div className="cell small-4">
      <h3>{props.puzzle[8]}</h3>
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