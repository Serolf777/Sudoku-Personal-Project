import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import ErrorList from "./ErrorList.js"
import translateServerErrors from "../services/translateServerErrors.js"

const puzzlePage = (props) => {

  return(
    <div className="callout primary">
      <h1>Here are some puzzles!</h1>
        <Link to="/puzzle/1"><button className="button">Easy Puzzle</button></Link>
        <Link to="/puzzle/2"><button className="button">Medium Puzzle</button></Link>
        <Link to="/puzzle/3"><button className="button">Hard Puzzle</button></Link>
    </div>
  )

}
export default puzzlePage