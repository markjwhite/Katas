const multiplicationTable = (maxValue) => {
  let table = ''; // declare table variable
  for (let i = 1; i <= maxValue; i++) { // loops through to max value
    for (let c = 1; c <= maxValue; c++) { // loops through to max value before first loop
      table += (i * c) + " "; // multiplies i from first loop to c of second loop and add/assigns it to table variable
    }
    table += '\n'; // everytime we go i++ we go to a new line
  }
  return table; // the final product
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));