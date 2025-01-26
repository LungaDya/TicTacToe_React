 const checkForSequence = (option1, option2, option3) => {
  if (option1 === null || option2 === null || option3 == null) {
    return false;
  }
  
  return option1 === option2 && option2 === option3;
};

export const checkForWinner = (board) => {
  //    0 1 2
  //    3 4 5
  //    6 7 8

  // rows
  for (let i = 0; i < 9; i += 3) {
    if (checkForSequence(board[i], board[i + 1], board[i + 2]))
      console.log("ROW winner");
    return true;
  }


// columns 

for (let i = 0; i < 3; i +=1 ) {
    if (checkForSequence(board[i], board[i + 3], board[i + 6]))
      console.log("COLUMN winner");
    return true;
  }

  // diaognal 1
  if(checkForSequence(board[0], board[4], board[8])) {
    console.log("DIAGONAL winner");
    return true;
  }
  

  // diaognal 2
  if(checkForSequence(board[2], board[4], board[6])) {
    console.log("DIAGONAL winner");
    return true;
  }

  // check if the game has drawn
  // the game is over or there is no winner
  
  console.log(board)
  if(!board.includes(null)) {
    return "draw"
  }
  return false;
};
