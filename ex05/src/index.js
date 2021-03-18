var myNestedArray = [["Snickers", 2]];

function myNestedFunction(arr) {
    var myNewNestedArray = [...arr];

    myNewNestedArray.pop();
    myNewNestedArray.push(["Toblerone",5]);
    myNewNestedArray.push(["Milka", 3]);

    return myNewNestedArray;
}


console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;