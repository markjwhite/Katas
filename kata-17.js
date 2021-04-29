const urlDecode = (text) => {
  let decoded = {};
  text = replaceSpace(text);
  let keyValue = text.split(/[&=]/);
  for (let i = 0; i < keyValue.length; i += 2) {
    decoded[keyValue[i]] = keyValue[i + 1];
  }
  return decoded;
};

const replaceSpace = (string) => {
  let space = string.split('%20');
  return space.join(' ');
};


console.log(replaceSpace("duck%20rubber"));
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
