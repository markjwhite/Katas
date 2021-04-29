//Functions That Change Case
const camelCase = (input) => {
  let caseMaker = input.split('');
  for (let i = 0; i < caseMaker.length; i++) {
    if (caseMaker[i] === ' ') {
      caseMaker[i + 1] = caseMaker[i + 1].toUpperCase();
      caseMaker.splice(i, 1);

    }
  }
  return caseMaker.join("");
};
const pascalCase = (input) => {
  let caseMaker = input.split('');
  caseMaker[0] = caseMaker[0].toUpperCase();
  for (let i = 0; i < caseMaker.length; i++) {
    if (caseMaker[i] === ' ') {
      caseMaker[i + 1] = caseMaker[i + 1].toUpperCase();
      caseMaker.splice(i, 1);
    }
  }
  return caseMaker.join("");
};

const snakeCase = (input) => {
  let caseMaker = input.split('');
  for (let i = 0; i < caseMaker.length; i++) {
    if (caseMaker[i] === ' ') {
      caseMaker.splice(i, 1, '_');
    }
  }
  return caseMaker.join("");
};

const kebabCase = (input) => {
  let caseMaker = input.split('');
  for (let i = 0; i < caseMaker.length; i++) {
    if (caseMaker[i] === ' ') {
      caseMaker.splice(i, 1, '-');
    }
  }
  return caseMaker.join("");
};

const titleCase = (input) => {
  let caseMaker = input.split('');
  caseMaker[0] = caseMaker[0].toUpperCase();
  for (let i = 0; i < caseMaker.length; i++) {
    if (caseMaker[i] === ' ') {
      caseMaker[i + 1] = caseMaker[i + 1].toUpperCase();
    }
  }
  return caseMaker.join("");
};

const vowelCase = (input) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let caseMaker = input.split('');
  for (let x = 0; x < vowels.length; x++) {
    for (let i = 0; i < caseMaker.length; i++) {
      if (caseMaker[i] === vowels[x]) {
        caseMaker[i] = caseMaker[i].toUpperCase();
      }
    }
  }
  return caseMaker.join("");
};

const consonantCase = (input) => {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  input = input.toUpperCase();
  let caseMaker = input.split('');
  for (let x = 0; x < vowels.length; x++) {
    for (let i = 0; i < caseMaker.length; i++) {
      if (caseMaker[i] === vowels[x]) {
        caseMaker[i] = caseMaker[i].toLowerCase();
      }
    }
  }
  return caseMaker.join("");
};

const upperCase = (input) => {
  let caseMaker = input.toUpperCase();
  return caseMaker;
};

const lowerCase = (input) => {
  let caseMaker = input.toLowerCase();
  return caseMaker;
};


//Master Function
const makeCase = (input, style) => {
  let newString = '';
  //First Priority Cases
  if (style === 'camel' || style.includes('camel')) {
    newString = camelCase(input);
  } else if (style === 'pascal' || style.includes('pascal')) {
    newString = pascalCase(input);
  } else if (style === 'snake' || style.includes('snake')) {
    newString = snakeCase(input);
  } else if (style === 'kebab' || style.includes('kebab')) {
    newString = kebabCase(input);
  } else if (style === 'title' || style.includes('title')) {
    newString = titleCase(input);
  }
  //vowelCase
  if (style === 'vowel' || style.includes('vowel')) {
    if (newString === '') {
      newString = vowelCase(input);
    } else if (newString !== '') {
      newString = vowelCase(newString);
    }
  }
  //consonantCase
  if (style === 'consonant' || style.includes('consonant')) {
    if (newString === '') {
      newString = consonantCase(input);
    } else if (newString !== '') {
      newString = consonantCase(newString);
    }
  }
  //upperCase
  if (style === 'upper' || style.includes('upper')) {
    if (newString === '') {
      newString = upperCase(input);
    } else if (newString !== '') {
      newString = upperCase(newString);
    }
    //lowerCase
    if (style === 'lower' || style.includes('lower')) {
      if (newString === '') {
        newString = lowerCase(input);
      } else if (newString !== '') {
        newString = lowerCase(newString);
      }
    }
  }
  return newString;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["consonant", "upper"]));