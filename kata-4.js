const instructorWithLongestName = function(instructors) {
  let nameLength = 0; //holds current length of longest name in loop
  let longestName; //holds the current longest name object in the loop and ultimately the longest name object
  for (let i = 0; i < instructors.length; i++) { //loops through instructors array
    if (instructors[i].name.length > nameLength) { //check the if length of name property is longer than nameLength
      nameLength = instructors[i].name.length; //assigns new namelength
      longestName = instructors[i]; //assigns the current longest name
    }
  }
  return longestName;
};


console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));
console.log(instructorWithLongestName([ //same length
  { name: "Mark", course: "Web" },
  { name: "Kyle", course: "iOS" }
]));
