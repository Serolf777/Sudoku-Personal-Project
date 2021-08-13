const cleanUserSubmission = formInput => {
  for(const box in formInput){
    let adjustedBox = formInput[box]
    
    if(formInput[box].length < 9){
      for(let x = 0; x< 9; x++){
        formInput[box][x] = 0
      }
    }

    formInput[box].forEach((square, index) => {
        adjustedBox[index] = parseInt(square)
        return adjustedBox
      })
  }
  return formInput
}
export default cleanUserSubmission