const conditionalSum = function(values, condition) {
  let totalSum = 0; //function will return 0 if that condition is not matched.
  for (let value of values) { //loops through the array
    if (condition === 'even' && value % 2 === 0) { //determines whether condition is 'even' and whether each value within the array matches the condition
      totalSum += value; //adds even value to even value
    } else if (condition === 'odd' && value % 2 !== 0) { //determines whether condition is 'odd' and whether each value within the array matches the condition
      totalSum += value; //adds odd value to odd value
    }
  }
  return totalSum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
