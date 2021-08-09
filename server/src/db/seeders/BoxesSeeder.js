import { Boxes } from "../../models/index.js"

class BoxesSeeder {
  static async seed() {

    let dataEasy = {
      box1: [ 0, 0, 0, 0, 9, 8, 0, 0, 0 ],
      box2: [ 1, 0, 4, 0, 0, 0, 0, 8, 0 ],
      box3: [ 0, 0, 0, 0, 4, 0, 0, 0, 5 ],
      box4: [ 0, 0, 0, 0, 0, 0, 7, 9, 0 ],
      box5: [ 4, 0, 7, 0, 0, 0, 0, 0, 0 ],
      box6: [ 0, 9, 6, 0, 2, 3, 4, 5, 1 ],
      box7: [ 3, 4, 8, 0, 0, 1, 9, 6, 0 ],
      box8: [ 5, 0, 1, 0, 0, 2, 8, 0, 0 ],
      box9: [ 9, 7, 2, 0, 8, 4, 5, 1, 0 ]
    }

    let dataMedium = {
      box1: [ 0, 0, 0, 0, 0, 5, 0, 0, 0 ],
      box2: [ 0, 0, 0, 3, 8, 0, 0, 0, 0 ],
      box3: [ 5, 0, 7, 0, 2, 0, 0, 0, 9 ],
      box4: [ 0, 1, 0, 4, 5, 0, 7, 0, 0 ],
      box5: [ 0, 5, 6, 7, 9, 0, 1, 0, 0 ],
      box6: [ 7, 8, 0, 0, 1, 0, 0, 5, 0 ],
      box7: [ 6, 0, 1, 0, 0, 2, 9, 0, 0 ],
      box8: [ 8, 4, 0, 0, 0, 0, 6, 0, 0 ],
      box9: [ 0, 0, 0, 0, 0, 0, 0, 0, 4 ]
    } 

    let dataHard = {
      box1: [ 0, 0, 0, 0, 0, 0, 6, 0, 0 ],
      box2: [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      box3: [ 6, 0, 9, 1, 0, 7, 0, 0, 0 ],
      box4: [ 0, 1, 0, 0, 0, 0, 0, 9, 0 ],
      box5: [ 0, 0, 0, 0, 9, 0, 1, 0, 0 ],
      box6: [ 0, 9, 0, 0, 0, 0, 0, 0, 6 ],
      box7: [ 0, 0, 1, 0, 0, 0, 9, 4, 8 ],
      box8: [ 8, 6, 2, 0, 3, 4, 5, 7, 0 ],
      box9: [ 0, 0, 0, 5, 0, 0, 3, 0, 2 ]
    }

    let serializedDataEasy = JSON.stringify(dataEasy);
    let serializedDataMedium = JSON.stringify(dataMedium);
    let serializedDataHard = JSON.stringify(dataHard);

    const boxesData = [
      {
        allBoxes: serializedDataEasy,
        puzzleId: 1
      },
      {
        allBoxes: serializedDataMedium,
        puzzleId: 2
      },
      {
        allBoxes: serializedDataHard,
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