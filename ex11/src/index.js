function splitArrayInGroups(arr, n) {

    var newArray = [...arr];
    var result = [];
    var iteration = 0;

    while (newArray.length > 0) {
        result.push(newArray.splice(0, n));
        iteration ++
        if (iteration === n) {
            break;
        }
    }
    return result;
}

console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));

module.exports = splitArrayInGroups;