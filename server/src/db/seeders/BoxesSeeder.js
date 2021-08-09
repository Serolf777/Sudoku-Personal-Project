import { Boxes } from "../../models/index.js"

class BoxesSeeder {
  static async seed() {

    let dataEasyOne = {
      box1: [ 0, 6, 0, 0, 0, 1, 0, 0, 4 ],
      box2: [ 0, 0, 9, 0, 0, 7, 3, 8, 0 ],
      box3: [ 2, 0, 0, 0, 0, 0, 7, 0, 6 ],
      box4: [ 0, 5, 0, 0, 2, 8, 3, 1, 0 ],
      box5: [ 8, 0, 3, 0, 9, 0, 5, 0, 4 ],
      box6: [ 0, 6, 7, 3, 4, 0, 0, 2, 0 ],
      box7: [ 6, 0, 2, 0, 0, 0, 0, 0, 5 ],
      box8: [ 0, 3, 8, 7, 0, 0, 4, 0, 0 ],
      box9: [ 5, 0, 0, 4, 0, 0, 0, 8, 0 ]
    }

    let dataEasyTwo = {
      box1: [ 9, 4, 0, 0, 2, 0, 7, 6, 3 ],
      box2: [ 6, 0, 0, 0, 3, 8, 9, 0, 0 ],
      box3: [ 0, 0, 0, 6, 0, 0, 0, 0, 4 ],
      box4: [ 6, 0, 1, 0, 5, 0, 0, 0, 2 ],
      box5: [ 8, 0, 0, 0, 0, 0, 0, 0, 9 ],
      box6: [ 3, 0, 0, 0, 9, 0, 4, 0, 7 ],
      box7: [ 5, 0, 0, 0, 0, 6, 0, 0, 0 ],
      box8: [ 0, 0, 3, 2, 8, 0, 0, 0, 4 ],
      box9: [ 2, 1, 6, 0, 4, 0, 0, 8, 3 ]
    }

    let dataEasyThree = {
      box1: [ 0, 0, 0, 7, 0, 0, 4, 6, 0 ],
      box2: [ 0, 0, 0, 0, 0, 4, 0, 1, 8 ],
      box3: [ 8, 0, 4, 1, 2, 0, 0, 0, 9 ],
      box4: [ 3, 2, 0, 1, 0, 6, 0, 8, 0 ],
      box5: [ 0, 4, 5, 0, 0, 0, 6, 7, 0 ],
      box6: [ 0, 9, 0, 4, 0, 7, 0, 1, 3 ],
      box7: [ 2, 0, 0, 0, 7, 3, 6, 0, 5 ],
      box8: [ 7, 5, 0, 4, 0, 0, 0, 0, 0 ],
      box9: [ 0, 8, 1, 0, 0, 5, 0, 0, 0 ]
    }

    let dataMediumOne = {
      box1: [ 0, 0, 4, 0, 0, 0, 1, 0, 7 ],
      box2: [ 0, 0, 3, 2, 0, 4, 0, 0, 0 ],
      box3: [ 0, 0, 0, 0, 0, 1, 4, 3, 8 ],
      box4: [ 0, 0, 1, 0, 7, 5, 8, 0, 0 ],
      box5: [ 4, 0, 5, 0, 0, 0, 6, 0, 7 ],
      box6: [ 0, 0, 3, 9, 8, 0, 1, 0, 0 ],
      box7: [ 7, 4, 9, 5, 0, 0, 0, 0, 0 ],
      box8: [ 0, 0, 0, 9, 0, 2, 7, 0, 0 ],
      box9: [ 2, 0, 5, 0, 0, 0, 3, 0, 0 ]
    }

    let dataMediumTwo = {
      box1: [ 0, 5, 0, 0, 6, 0, 0, 0, 1 ],
      box2: [ 6, 3, 0, 0, 0, 4, 0, 9, 0 ],
      box3: [ 4, 0, 9, 0, 0, 5, 0, 0, 0 ],
      box4: [ 0, 0, 2, 0, 0, 4, 0, 8, 0 ],
      box5: [ 0, 0, 0, 7, 8, 1, 0, 0, 0 ],
      box6: [ 0, 9, 0, 2, 0, 0, 1, 0, 0 ],
      box7: [ 0, 0, 0, 7, 0, 0, 3, 0, 6 ],
      box8: [ 0, 7, 0, 2, 0, 0, 0, 1, 8 ],
      box9: [ 5, 0, 0, 0, 8, 0, 0, 7, 0 ]
    }

    let dataMediumThree = {
      box1: [ 0, 6, 0, 5, 0, 0, 0, 0, 0 ],
      box2: [ 2, 0, 4, 7, 0, 8, 9, 0, 5 ],
      box3: [ 8, 0, 0, 0, 6, 0, 2, 0, 3 ],
      box4: [ 0, 0, 0, 9, 7, 0, 4, 0, 0 ],
      box5: [ 0, 0, 0, 0, 2, 0, 0, 0, 0 ],
      box6: [ 0, 0, 5, 0, 1, 8, 0, 0, 0 ],
      box7: [ 2, 0, 5, 0, 4, 0, 0, 0, 3 ],
      box8: [ 1, 0, 9, 3, 0, 2, 4, 0, 6 ],
      box9: [ 0, 0, 0, 0, 0, 9, 0, 7, 0 ]
    }

    let dataHardOne = {
      box1: [ 0, 0, 0, 0, 0, 3, 1, 0, 0 ],
      box2: [ 9, 4, 0, 0, 0, 0, 0, 3, 2 ],
      box3: [ 3, 0, 0, 0, 0, 0, 0, 0, 5 ],
      box4: [ 7, 1, 9, 0, 2, 0, 0, 0, 8 ],
      box5: [ 2, 0, 0, 0, 0, 0, 0, 0, 7 ],
      box6: [ 8, 0, 0, 0, 7, 0, 6, 2, 9 ],
      box7: [ 6, 0, 0, 0, 0, 0, 0, 0, 1 ],
      box8: [ 5, 7, 0, 0, 0, 0, 0, 8, 3 ],
      box9: [ 0, 0, 2, 4, 0, 0, 0, 0, 0 ]
    }

    let dataHardTwo = {
      box1: [ 0, 0, 0, 0, 0, 0, 0, 0, 4 ],
      box2: [ 0, 4, 0, 0, 0, 3, 8, 2, 0 ],
      box3: [ 0, 0, 1, 0, 8, 7, 0, 0, 0 ],
      box4: [ 0, 0, 6, 1, 3, 0, 5, 4, 0 ],
      box5: [ 4, 0, 0, 0, 0, 0, 0, 0, 2 ],
      box6: [ 0, 7, 9, 0, 4, 5, 1, 0, 0 ],
      box7: [ 0, 0, 0, 3, 6, 0, 2, 0, 0 ],
      box8: [ 0, 6, 5, 9, 0, 0, 0, 3, 0 ],
      box9: [ 8, 0, 0, 0, 0, 0, 0, 0, 0 ]
    }

    let dataHardThree = {
      box1: [ 0, 9, 0, 0, 5, 0, 8, 3, 7 ],
      box2: [ 4, 2, 0, 0, 0, 0, 0, 0, 0 ],
      box3: [ 0, 7, 0, 0, 0, 1, 0, 4, 0 ],
      box4: [ 0, 2, 0, 0, 0, 0, 9, 0, 0 ],
      box5: [ 1, 0, 0, 0, 4, 0, 0, 0, 5 ],
      box6: [ 0, 0, 9, 0, 0, 0, 0, 6, 0 ],
      box7: [ 0, 1, 0, 4, 0, 0, 0, 7, 0 ],
      box8: [ 0, 0, 0, 0, 0, 0, 0, 3, 9 ],
      box9: [ 8, 9, 7, 0, 2, 0, 0, 5, 0 ]
    }


    let serializedDataEasyOne = JSON.stringify(dataEasyOne);
    let serializedDataEasyTwo = JSON.stringify(dataEasyTwo);
    let serializedDataEasyThree = JSON.stringify(dataEasyThree);

    let serializedDataMediumOne = JSON.stringify(dataMediumOne);
    let serializedDataMediumTwo = JSON.stringify(dataMediumTwo);
    let serializedDataMediumThree = JSON.stringify(dataMediumThree);

    let serializedDataHardOne = JSON.stringify(dataHardOne);
    let serializedDataHardTwo = JSON.stringify(dataHardTwo);
    let serializedDataHardThree = JSON.stringify(dataHardThree);

    const boxesData = [
      {
        allBoxes: serializedDataEasyOne,
        puzzleId: 1
      },
      {
        allBoxes: serializedDataEasyTwo,
        puzzleId: 2
      },
      {
        allBoxes: serializedDataEasyThree,
        puzzleId: 3
      },
      {
        allBoxes: serializedDataMediumOne,
        puzzleId: 4
      },
      {
        allBoxes: serializedDataMediumTwo,
        puzzleId: 5
      },
      {
        allBoxes: serializedDataMediumThree,
        puzzleId: 6
      },
      {
        allBoxes: serializedDataHardOne,
        puzzleId: 7
      },
      {
        allBoxes: serializedDataHardTwo,
        puzzleId: 8
      },
      {
        allBoxes: serializedDataHardThree,
        puzzleId: 9
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