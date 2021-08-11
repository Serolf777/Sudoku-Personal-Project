class RandomPuzzleSerializer {
  static async getDetail(puzzle, difficulty) {

    let serializedPuzzle = {}

    serializedPuzzle.difficulty = difficulty

    serializedPuzzle.boxes = {
      box1: puzzle.board[0], box2: puzzle.board[1], box3: puzzle.board[1], 
      box4: puzzle.board[3], box5: puzzle.board[4], box6: puzzle.board[5],
      box7: puzzle.board[6], box8: puzzle.board[7], box9: puzzle.board[8]
    }

    return serializedPuzzle
  }
}

export default RandomPuzzleSerializer