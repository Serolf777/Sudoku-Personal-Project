import React from "react"

const InputBox = (props) => {

  return(
    <input 
      className="sudoku_box cell small-4"
      type="text"
      maxLength="1"
      id={props.id}
      name={props.name}
      onChange={props.handleInputChange}
    />
  )
}

export default InputBox