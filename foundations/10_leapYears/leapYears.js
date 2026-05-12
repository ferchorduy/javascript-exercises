const leapYears = function(year) {
  if (year % 100 === 0 && year % 400 !== 0) return false;
  if (year % 4 === 0 || year % 400 === 0) return true;
  return false;
};

// const leapYears = year => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) // Other solution

// Do not edit below this line
module.exports = leapYears;
