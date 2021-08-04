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
          Here are some puzzles!
        </p>
        <Link to="/puzzle/1"><button className="button">Easy Puzzle</button></Link>
        <Link to="/puzzle/2"><button className="button">Medium Puzzle</button></Link>
        <Link to="/puzzle/3"><button className="button">Hard Puzzle</button></Link>
      </div>
    )
  }

  return(
    <div>
      <h1>
        Welcome to the wonderful world of Sudoku puzzles!
      </h1>
      {checkLogin}
    </div>
  )

}

export default FrontPage