import React, { useEffect, useState } from "react";

const PuzzlePage = (props) => {

  return(
    <div className="callout primary">
      <h1>Here are some puzzles!</h1>
      <ul>
        <li><a href="/puzzle/1">Easy Puzzle!</a></li>
        <li><a href="/puzzle/2">Another Easy Puzzle!</a></li>
        <li><a href="/puzzle/3">The Last Easy Puzzle!</a></li>
        <li><a href="/puzzle/4">Medium Puzzle!</a></li>
        <li><a href="/puzzle/5">Another Medium Puzzle!</a></li>
        <li><a href="/puzzle/6">The Last Medium Puzzle!</a></li>
        <li><a href="/puzzle/7">Hard Puzzle!</a></li>
        <li><a href="/puzzle/8">Another Hard Puzzle!</a></li>
        <li><a href="/puzzle/9">The Last Hard Puzzle!</a></li>
      </ul>

      <h1>Randomly Generated Puzzles from Sugoku!</h1> 
      <h5>Note: Due to the inconsistency of the API, know that some of these puzzles might not actually be completeable.</h5>
      <ul>
        <li><a href="/randomPuzzle/easy">Randomly Generated Easy Puzzle!</a></li>
        <li><a href="/randomPuzzle/medium">Randomly Generated Medium Puzzle!</a></li>
        <li><a href="/randomPuzzle/hard">Randomly Generated Hard Puzzle!</a></li>
      </ul>
    </div>
  )
}
export default PuzzlePage