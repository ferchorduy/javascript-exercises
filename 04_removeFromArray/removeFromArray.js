const removeFromArray = function(array, ...args) {
    for (const removable of args) {
        for (const element of array) {
            if (removable === element) {
                array.splice(array.indexOf(element), 1);
            } else {
                continue;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
