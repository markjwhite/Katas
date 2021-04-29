const camelCase = function(input) {
  let humps = input.split('');
  for (let i = 0; i < humps.length; i++) {
    if (humps[i] === ' ') {
      humps[i + 1] = humps[i + 1].toUpperCase();
      humps.splice(i, 1);

    }
  }
  return humps.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));