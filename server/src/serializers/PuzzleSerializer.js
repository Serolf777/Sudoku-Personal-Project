import BlockSerializer from "./BlockSerializer.js"

class PuzzleSerializer {
  static async getDetail(puzzle) {
    const allowedAttributes = ["id", "difficulty"]

    let serializedPuzzle = {}
    allowedAttributes.forEach(attribute => {
      serializedPuzzle[attribute] = puzzle[attribute]
    })

    const boxOne = await puzzle.$relatedQuery("boxOne")
    const boxTwo = await puzzle.$relatedQuery("boxTwo")
    const boxThree = await puzzle.$relatedQuery("boxThree")
    const boxFour = await puzzle.$relatedQuery("boxFour")
    const boxFive = await puzzle.$relatedQuery("boxFive")
    const boxSix = await puzzle.$relatedQuery("boxSix")
    const boxSeven = await puzzle.$relatedQuery("boxSeven")
    const boxEight = await puzzle.$relatedQuery("boxEight")
    const boxNine = await puzzle.$relatedQuery("boxNine")
    let boxes = await puzzle.$relatedQuery("boxes")

    serializedPuzzle.boxOne = boxOne
    serializedPuzzle.boxTwo = boxTwo
    serializedPuzzle.boxThree = boxThree
    serializedPuzzle.boxFour = boxFour
    serializedPuzzle.boxFive = boxFive
    serializedPuzzle.boxSix = boxSix
    serializedPuzzle.boxSeven = boxSeven
    serializedPuzzle.boxEight = boxEight
    serializedPuzzle.boxNine = boxNine
    serializedPuzzle.boxes = boxes

    return serializedPuzzle
  }
}

export default PuzzleSerializer