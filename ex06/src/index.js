function multipleArrayFunction(myArray) {
   
    var myNewArray = [...myArray];
    var arr = [];
    var product = 1; 
    var sum = 0;

    for(i = 0; i < myNewArray.length; i++) {
        for(j = 0; j < myNewArray[i].length; j++) {
            sum = sum + myNewArray[i][j];
            product = product * myNewArray[i][j];
        }
     }
      arr.push(product);
      arr.push(sum);
 
      return arr;
}

console.log(multipleArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multipleArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
console.log(multipleArrayFunction([[1, 2], [3, 4, 5, 6,], [7, 8, 9]]));

module.exports = multipleArrayFunction;