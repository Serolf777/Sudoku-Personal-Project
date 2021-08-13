import React from "react"

const InputSquare = (props) => {

  let readOnly = false
  const onClick = async (event) => {
    event.preventDefault()
    if(readOnly === false){
      readOnly= true
    }
    else{
      readOnly=false
    }
    console.log(readOnly)
  }

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

export default InputSquare