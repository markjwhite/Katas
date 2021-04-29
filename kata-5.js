const urlEncode = function(text) {
  let encodedURL = [];
  for (let i = 0; i < text.length; i++) {
    encodedURL.push(text[i]);
    if (encodedURL[i] === ' ') {
      encodedURL.splice(i, 1, '%20');
    }
  }

  while ((encodedURL[encodedURL.length - 1]) === '%20') {
    encodedURL.pop();
  }
  while (encodedURL[0] === '%20') {
    encodedURL.shift();
  }

  return encodedURL.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs         "));
console.log(urlEncode("blue is greener than purple for sure"));