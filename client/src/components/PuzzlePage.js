import React, { useEffect, useState } from "react";

const PuzzlePage = (props) => {

  return(
    <div className="callout primary">
      <h1>Here are some puzzles!</h1>
      <ul>
        <li><a href="/puzzle/1">Easy Puzzle!</a></li>
        <li><a href="/puzzle/2">Another Easy Puzzle!</a></li>
        <li><a href="/puzzle/3">The last Easy Puzzle!</a></li>
        <li><a href="/puzzle/4">Medium Puzzle!</a></li>
        <li><a href="/puzzle/5">Another Medium Puzzle!</a></li>
        <li><a href="/puzzle/6">The last Medium Puzzle!</a></li>
        <li><a href="/puzzle/7">Hard Puzzle!</a></li>
        <li><a href="/puzzle/8">Another Hard Puzzle!</a></li>
        <li><a href="/puzzle/9">The last Hard Puzzle!</a></li>
      </ul>

      <h1>Here are some randomly generated puzzles using an outside API Sugoku!*</h1> 
      <h7>*These randomly generated puzzles might not all be possible</h7>
      <ul>
        <li><a href="/randomPuzzle/easy">Randomly generated Easy Puzzle!</a></li>
        <li><a href="/randomPuzzle/medium">Randomly generated Medium Puzzle!</a></li>
        <li><a href="/randomPuzzle/hard">Randomly generated Hard Puzzle!</a></li>
      </ul>
    </div>
  )
}
export default PuzzlePage