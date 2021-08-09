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
      <div>
        <p>
          Now let's get you to the puzzles!
        </p>
        <Link to="/puzzles">Click here!</Link>
      </div>
    )
  }

  return(
    <div className="callout primary">
      <h1>
        Welcome to the wonderful world of Sudoku puzzles!
      </h1>
      {checkLogin}
    </div>
  )

}

export default FrontPage