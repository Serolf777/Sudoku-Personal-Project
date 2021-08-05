import { Boxes } from "../../models/index.js"

class BoxesSeeder {
  static async seed() {

    let data = {
      box1: [ 1, 3, 2, 4, 6, 5, 7, 8, 9 ],
      box2: [ 1, 3, 2, 4, 6, 5, 7, 8, 9 ],
      box3: [ 1, 3, 2, 4, 6, 5, 7, 8, 9 ],
      box4: [ 1, 3, 2, 4, 6, 5, 7, 8, 9 ],
      box5: [ 1, 3, 2, 4, 6, 5, 7, 8, 9 ],
      box6: [ 1, 3, 2, 4, 6, 5, 7, 8, 9 ],
      box7: [ 1, 3, 2, 4, 6, 5, 7, 8, 9 ],
      box8: [ 1, 3, 2, 4, 6, 5, 7, 8, 9 ],
      box9: [ 1, 3, 2, 4, 6, 5, 7, 8, 9 ]
  }

    let serializedData = JSON.stringify(data);

    const boxesData = [
      {
        allBoxes: serializedData,
        puzzleId: 1
      },
      {
        allBoxes: serializedData,
        puzzleId: 2
      },
      {
        allBoxes: serializedData,
        puzzleId: 3
      }
    ]

    for (const singleBox of boxesData) {
      const currentBox = await Boxes.query().findOne(singleBox)
      if (!currentBox) {
        await Boxes.query().insert(singleBox)
      }
    }
  }
}

export default BoxesSeeder