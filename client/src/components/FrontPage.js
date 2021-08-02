import React,  { useState } from "react"
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
      <p>
        Here are some puzzles!
      </p>
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