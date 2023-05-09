const sumAll = function(num1, num2) {
    let finalSum = 0;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    } else if (num1 >= 0 && num2 >= 0) {
        for (let i = Math.min(num1, num2); i < (Math.max(num1, num2) + 1); i++) {
            finalSum += i;
        }
    } else {
        return "ERROR";
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
