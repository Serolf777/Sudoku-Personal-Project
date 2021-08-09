import React, { useEffect, useState } from "react";

const PuzzlePage = (props) => {

  return(
    <div className="callout primary">
      <h1>Here are some puzzles!</h1>
      <ul>
        <li><a href="/puzzle/1">Easy Puzzle!</a></li>
        <li><a href="/puzzle/2">Another easy Puzzle!</a></li>
        <li><a href="/puzzle/3">The last easy Puzzle!</a></li>
        <li><a href="/puzzle/4">Medium Puzzle!</a></li>
        <li><a href="/puzzle/5">Another medium Puzzle!</a></li>
        <li><a href="/puzzle/6">The last medium Puzzle!</a></li>
        <li><a href="/puzzle/7">Hard Puzzle!</a></li>
        <li><a href="/puzzle/8">Another hard Puzzle!</a></li>
        <li><a href="/puzzle/9">The last hard Puzzle!</a></li>
      </ul>
    </div>
  )
}
export default PuzzlePage