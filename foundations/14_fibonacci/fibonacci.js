const fibonacci = function(num) {
  if (num < 0) return 'OOPS';
  const fibNums = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibNums[i] = fibNums[i-2] + fibNums[i-1];
  }
  return fibNums[num];
};

// Do not edit below this line
module.exports = fibonacci;
