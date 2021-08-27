async function useLoadedSave(userPuzzleSave) {

  for(const box in userPuzzleSave) {
    for(let x=0; userPuzzleSave[box].length > x; x++){
      if( !(userPuzzleSave[box][x] === 0) ){
        let desiredBox = document.getElementsByClassName(box)

        if(x < 3){
          if(x===0){
            desiredBox[0].children[0].children[0].placeholder = userPuzzleSave[box][x]
          } else if(x===1) {
            desiredBox[0].children[0].children[1].placeholder = userPuzzleSave[box][x]
          } else {
            desiredBox[0].children[0].children[2].placeholder = userPuzzleSave[box][x]
          }
        } else if(x < 6){
          if(x===3){
            desiredBox[0].children[1].children[0].placeholder = userPuzzleSave[box][x]
          } else if(x===4) {
            desiredBox[0].children[1].children[1].placeholder = userPuzzleSave[box][x]
          } else {
            desiredBox[0].children[1].children[2].placeholder = userPuzzleSave[box][x]
          }
        } else {
          if(x===6){
            desiredBox[0].children[2].children[0].placeholder = userPuzzleSave[box][x]
          } else if(x===7) {
            desiredBox[0].children[2].children[1].placeholder = userPuzzleSave[box][x]
          } else {
            desiredBox[0].children[2].children[2].placeholder = userPuzzleSave[box][x]
          }
        }
      }
    }
  }
}

export default useLoadedSave