class CheckSubmission {
  constructor(sudokuPuzzle){
    this.sudokuPuzzle = sudokuPuzzle
  }

  checkDuplicates(array) {
    const containDuplicates = array.some(
      (val, i) => array.indexOf(val) !== i
    )
    return containDuplicates
  }

  checkRow() {
    let row1 = []
    let row2 = []
    let row3 = []
    let row4 = []
    let row5 = []
    let row6 = []
    let row7 = []
    let row8 = []
    let row9 = []

    for(let x = 0; x < 3; x++) {
      row1.push(this.sudokuPuzzle.box1[x])
      row2.push(this.sudokuPuzzle.box1[x+3])
      row3.push(this.sudokuPuzzle.box1[x+6])
      row4.push(this.sudokuPuzzle.box4[x])
      row5.push(this.sudokuPuzzle.box4[x+3])
      row6.push(this.sudokuPuzzle.box4[x+6])
      row7.push(this.sudokuPuzzle.box7[x])
      row8.push(this.sudokuPuzzle.box7[x+3])
      row9.push(this.sudokuPuzzle.box7[x+6])
    }

    for(let x = 0; x < 3; x++) {
      row1.push(this.sudokuPuzzle.box2[x])
      row2.push(this.sudokuPuzzle.box2[x+3])
      row3.push(this.sudokuPuzzle.box2[x+6])
      row4.push(this.sudokuPuzzle.box5[x])
      row5.push(this.sudokuPuzzle.box5[x+3])
      row6.push(this.sudokuPuzzle.box5[x+6])
      row7.push(this.sudokuPuzzle.box8[x])
      row8.push(this.sudokuPuzzle.box8[x+3])
      row9.push(this.sudokuPuzzle.box8[x+6])
    }

    for(let x = 0; x < 3; x++) {
      row1.push(this.sudokuPuzzle.box3[x])
      row2.push(this.sudokuPuzzle.box3[x+3])
      row3.push(this.sudokuPuzzle.box3[x+6])
      row4.push(this.sudokuPuzzle.box6[x])
      row5.push(this.sudokuPuzzle.box6[x+3])
      row6.push(this.sudokuPuzzle.box6[x+6])
      row7.push(this.sudokuPuzzle.box9[x])
      row8.push(this.sudokuPuzzle.box9[x+3])
      row9.push(this.sudokuPuzzle.box9[x+6])
    }

    if(!this.checkDuplicates(row1) &&
    !this.checkDuplicates(row2) &&
    !this.checkDuplicates(row3) &&
    !this.checkDuplicates(row4) &&
    !this.checkDuplicates(row5) &&
    !this.checkDuplicates(row6) &&
    !this.checkDuplicates(row7) &&
    !this.checkDuplicates(row8) &&
    !this.checkDuplicates(row9)
    ){
      return true
    } else {
      return false
    }
  }

  checkColumn() {
    let column1 = []
    let column2 = []
    let column3 = []
    let column4 = []
    let column5 = []
    let column6 = []
    let column7 = []
    let column8 = []
    let column9 = []

    for(let x = 0; x< 7; x+=3){
      column1.push(this.sudokuPuzzle.box1[x])
      column2.push(this.sudokuPuzzle.box1[x+1])
      column3.push(this.sudokuPuzzle.box1[x+2])
      column4.push(this.sudokuPuzzle.box2[x])
      column5.push(this.sudokuPuzzle.box2[x+1])
      column6.push(this.sudokuPuzzle.box2[x+2])
      column7.push(this.sudokuPuzzle.box3[x])
      column8.push(this.sudokuPuzzle.box3[x+1])
      column9.push(this.sudokuPuzzle.box3[x+2])
    }
    

    for(let x= 0; x< 7; x+=3){
      column1.push(this.sudokuPuzzle.box4[x])
      column2.push(this.sudokuPuzzle.box4[x+1])
      column3.push(this.sudokuPuzzle.box4[x+2])
      column4.push(this.sudokuPuzzle.box5[x])
      column5.push(this.sudokuPuzzle.box5[x+1])
      column6.push(this.sudokuPuzzle.box5[x+2])
      column7.push(this.sudokuPuzzle.box6[x])
      column8.push(this.sudokuPuzzle.box6[x+1])
      column9.push(this.sudokuPuzzle.box6[x+2])
    }

    for(let x= 0; x< 7; x+=3){
      column1.push(this.sudokuPuzzle.box7[x])
      column2.push(this.sudokuPuzzle.box7[x+1])
      column3.push(this.sudokuPuzzle.box7[x+2])
      column4.push(this.sudokuPuzzle.box8[x])
      column5.push(this.sudokuPuzzle.box8[x+1])
      column6.push(this.sudokuPuzzle.box8[x+2])
      column7.push(this.sudokuPuzzle.box9[x])
      column8.push(this.sudokuPuzzle.box9[x+1])
      column9.push(this.sudokuPuzzle.box9[x+2])
    }

    if(!this.checkDuplicates(column1) &&
      !this.checkDuplicates(column2) &&
      !this.checkDuplicates(column3) &&
      !this.checkDuplicates(column4) &&
      !this.checkDuplicates(column5) &&
      !this.checkDuplicates(column6) &&
      !this.checkDuplicates(column7) &&
      !this.checkDuplicates(column8) &&
      !this.checkDuplicates(column9)
    ){
      return true
    } else {
      console.log(column1)
      return false
    }
  }

  checkBox() {

    if(
    !this.checkDuplicates(this.sudokuPuzzle.box1) &&
    !this.checkDuplicates(this.sudokuPuzzle.box2) &&
    !this.checkDuplicates(this.sudokuPuzzle.box3) &&
    !this.checkDuplicates(this.sudokuPuzzle.box4) &&
    !this.checkDuplicates(this.sudokuPuzzle.box5) &&
    !this.checkDuplicates(this.sudokuPuzzle.box6) &&
    !this.checkDuplicates(this.sudokuPuzzle.box7) &&
    !this.checkDuplicates(this.sudokuPuzzle.box8) &&
    !this.checkDuplicates(this.sudokuPuzzle.box9)
    )
    {
      return true
    } else {
      return false
    }
  }

  get isCorrect() {
    if( this.checkBox() && this.checkRow() && this.checkColumn() ){
      return true
    } else{
      return false
    }
  }
}

export default CheckSubmission