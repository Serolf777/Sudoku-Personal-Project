import React,  { useState } from "react"
import { Link } from "react-router-dom"
import { Redirect } from "react-router-dom"

const FrontPage = (props) => {
  
  let checkLogin
  if (props.userId === undefined) {
    checkLogin = (
      <p>
        Please log-in in order to try to complete some wonderful Sudoku puzzles!
      </p>
    )
  } else {
    checkLogin = (
      <div className="center">
        <p>
          Now let's get you to the puzzles!
        </p>
        <a href="/puzzles"className="buttonStyled">
          View Puzzles
        </a>
      </div>
    )
  }

  return(
    <div className="callout primary center">
      <h1>
        Welcome to the wonderful world of Sudoku puzzles!
      </h1>
      {checkLogin}
      <img 
        className="frontPageImage"
        alt="picture of sudoku puzzle"
        src="https://i.imgur.com/1rulCXS.png">
      </img>
    </div>
  )
}

export default FrontPage