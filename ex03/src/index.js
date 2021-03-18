var myPetsArray = [ "Dog", "Cat"]; 

  
function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    
    myPetsArray.push("Bird", "Fish"); 
    
    var firstPet = myNewPets[0];
    var lastPet = myNewPets[3];
    myNewPets.pop();
    myNewPets.shift();
    myNewPets.unshift("Lion");

    return myNewPets;
   
    }
    


console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;