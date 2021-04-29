const generateBoard = (whiteQueen, blackQueen) => {
  const shape = 8;
  const board = [];

  for (let y = 0; y < shape; y++) {
    board.push([]);
    for (let x = 0; x < shape; x++) {
      if ((y !== whiteQueen[0] || x !== whiteQueen[1]) && (y !== blackQueen[0] || x !== blackQueen[1])) {
        board[y].push(0);
      } else {
        board[y].push(1);
      }
    }
  }
  console.table(board);
  return [whiteQueen, blackQueen];
};

const queenThreat = (generateBoard) => {
  //checks verticle and horizontal threats
  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
    return true;
    //checks  diagonal threat
  } else if (whiteQueen[0] + whiteQueen[1] === blackQueen[0] + blackQueen[1]) {
    return true;
    //checks diagonal threat
  } else if (whiteQueen[0] - whiteQueen[1] === blackQueen[0] - blackQueen[1]) {
    return true;
  } else {
    return false;
  }
};

let whiteQueen = [3, 2];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

