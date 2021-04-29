const squareCode = (message) => {
  //Remove Spaces
  let newMsg = message.split(' ').join("");
  //Get Length of newMsg
  let lengthMsg = newMsg.length;
  //Length of Rows
  let shape = Math.ceil((Math.sqrt(lengthMsg)));
  //Make a Square
  let square = '';
  for (let i = 0; i < newMsg.length; i++) {
    if (i == 0) {
      square += newMsg[i];
    } else if (i % shape === 0) {
      square += '\n';
      square += newMsg[i];
    } else {
      square += newMsg[i];
    }
  }
  //Converts square String into a square Array
  let squareArr = square.split('\n');
  //Loops Through squareArr
  let codedArr = [];
  for (let y = 0; y < squareArr.length; y++) {
    for (let x = 0; x < squareArr[y].length; x++) {
      if (!codedArr[x]) {
        codedArr.push(squareArr[y][x]); //pushes each letter of first row of squareArr to codedArr
      } else {
        codedArr[x] += squareArr[y][x]; //adds the next letter
      }
    }
  }
  return codedArr.join(' ');
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));