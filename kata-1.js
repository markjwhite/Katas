const sumLargestNumbers = function(data) {
  let num1 = 0;
  let num2 = 0;
  let sum = 0;
  let indexNum1;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > num1) {
      num1 = data[i];
    }
  }
  indexNum1 = data.indexOf(num1);
  data.splice(indexNum1, 1);
  for (let i = 0; i < data.length; i++) {
    if (data[i] > num2) {
      num2 = data[i];
    }
  }
  sum = num1 + num2;
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));