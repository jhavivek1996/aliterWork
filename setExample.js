let myset = new Set(["Vivek","Satish","Gautam","Aniket","Manish"]);


console.log(`${myset}`); //Return the type valueOf

// console.log(myset);

// myset.add("Pradeep");

// myset.delete("Vivek");
// console.log(myset.has("Pradeep"));

// let newarr= Array.from(myset);


let loop = myset[Symbol.iterator]();

console.log(loop.next()); 
console.log(loop.next()); 
console.log(loop.next()); 
console.log(loop.next()); 
console.log(loop.next()); 
console.log(loop.next()); 
// to search the data from set myset.has("Value")
// to convert array from string Array.from(setName);
// to clear all the elements in the set myset.clear() 
// to add the value in the set myset.add("newValue")
// it returns all the values from the Set in the insertion order using keys myset.keys() 
// It also returns all the values from the Set in the same insertion order using value myset.value().
// forEach loop is used to iterate and print all the values in the set myset.forEach(functionName)
// Symbol.iterator is use to iterate values in Set one by one. Here value and status is returned in the form of done.