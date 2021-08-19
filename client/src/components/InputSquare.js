import React from "react"

const InputSquare = (props) => {

  return(
    <input 
      className={`sudoku-box cell small-4 ${props.id}`}
      type="text"
      maxLength="1"
      id={props.id}
      name={props.name}
      onChange={props.handleInputChange}
    />
  )
}

export default InputSquare