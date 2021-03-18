function mySplice(arr1, arr2, n) {

    var newArray = [...arr2];

    for (i = 0; i < arr1.length; i++) {

        newArray.splice(n, 0, arr1[i]);

    }

    return newArray;
}
console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Phillips"], ["Samsung", "AOX", "Sony"], 2));

module.exports = mySplice;