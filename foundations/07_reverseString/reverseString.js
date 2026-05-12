const reverseString = function(str) {
  let newString = '';
  for (let i = str.length-1 ; i >= 0 ; i--) {
    // newString += str.at(-1); // my attempt, Claude tried another way, below
    // str = str.slice(0, i);
    newString += str[i];
  } return newString;
};

// const reverseString = str => [...str].reverse().join('') // Claude code, same as answer except used [...str] as opposed to split()

// Do not edit below this line
module.exports = reverseString;
