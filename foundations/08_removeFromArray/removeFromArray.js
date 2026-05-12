const removeFromArray = function(arr, ...rest) {
  for (const value of rest) {
    for (let i = arr.length-1 ; i >= 0; i--) {
      if (arr[i] === value) arr.splice(i, 1);
    } 
  } return arr;
};

// const removeFromArray = (arr, ...rest) => arr.filter(item => !rest.includes(item)) // one liner option

// Do not edit below this line
module.exports = removeFromArray;
