import BlockSerializer from "./BlockSerializer.js"

class PuzzleSerializer {
  static async getDetail(puzzle) {
    const allowedAttributes = ["id", "difficulty"]

    let serializedPuzzle = {}
    allowedAttributes.forEach(attribute => {
      serializedPuzzle[attribute] = puzzle[attribute]
    })

    const boxOne = await puzzle.$relatedQuery("boxone")
    const boxTwo = await puzzle.$relatedQuery("boxtwo")
    const boxThree = await puzzle.$relatedQuery("boxthree")
    const boxFour = await puzzle.$relatedQuery("boxfour")
    const boxFive = await puzzle.$relatedQuery("boxfive")
    const boxSix = await puzzle.$relatedQuery("boxsix")
    const boxSeven = await puzzle.$relatedQuery("boxseven")
    const boxEight = await puzzle.$relatedQuery("boxeight")
    const boxNine = await puzzle.$relatedQuery("boxnine")

    serializedPuzzle.boxOne = boxOne
    serializedPuzzle.boxTwo = boxTwo
    serializedPuzzle.boxThree = boxThree
    serializedPuzzle.boxFour = boxFour
    serializedPuzzle.boxFive = boxFive
    serializedPuzzle.boxSix = boxSix
    serializedPuzzle.boxSeven = boxSeven
    serializedPuzzle.boxEight = boxEight
    serializedPuzzle.boxNine = boxNine


    return serializedPuzzle
  }
}

export default PuzzleSerializer