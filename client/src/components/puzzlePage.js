import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import ErrorList from "./ErrorList.js"
import translateServerErrors from "../services/translateServerErrors.js"

const PuzzlePage = (props) => {

  return(
    <div className="callout primary">
      <h1>Here are some puzzles!</h1>
        <p>
          <Link to="/puzzle/1">Easy Puzzle!</Link>
        </p>
        <p>
          <Link to="/puzzle/2">Medium Puzzle!</Link>
        </p>
        <p>
          <Link to="/puzzle/3">Hard Puzzle!</Link>
        </p>
    </div>
  )
}
export default PuzzlePage