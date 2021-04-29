const numberOfVowels = function(data) {
  let counter = 0;
  for (const letter of data) { //loops through string
    if (letter === 'a' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'e') { //checks letters for vowels
      counter++; //adds 1 for every vowel in string
    }
  }
  return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));