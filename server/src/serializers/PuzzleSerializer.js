class PuzzleSerializer {
  static async getDetail(puzzle) {
    const allowedAttributes = ["id", "difficulty"]

    let serializedPuzzle = {}
    allowedAttributes.forEach(attribute => {
      serializedPuzzle[attribute] = puzzle[attribute]
    })

    const boxes = await puzzle.$relatedQuery("boxes")
    const cleanedBoxes = JSON.parse(boxes.allBoxes)

    serializedPuzzle.boxes = cleanedBoxes

    return serializedPuzzle
  }
}

export default PuzzleSerializer