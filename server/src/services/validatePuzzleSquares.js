const validatePuzzleSquares = formInput => {
  Object.keys(formInput).forEach(field => {
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
  
      formInput[box].forEach((square) => {
        if( isNaN( Number(square) ) ){
          delete formInput[box]
        }
      })
    }
  })
  return formInput
}
export default validatePuzzleSquares