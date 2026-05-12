const sumAll = function(a, b) {
  let arr = [];
  let c = a;
  if (typeof a !== 'number' || typeof b !== 'number') return 'ERROR';
  if (a < 0 || b < 0) return 'ERROR';
  if (Number.isInteger(a) === false || Number.isInteger(b) === false) return 'ERROR'; // can do !Number.isInteger(a/b)
  if (b < a) a = b, b = c;                              // use Math.min() and Math.max() to get min and max between a and b
  for (i = a; i <= b; i++) {
    arr.push(i);                                        // can make a sum var and just add all numbers in arr, rather than newArr and reduce
  } return arr.reduce((acc, curr) => acc + curr, 0);
};



// Do not edit below this line
module.exports = sumAll;
