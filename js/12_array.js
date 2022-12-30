// Arrays
var myArray = [];

// add element in array
myArray[0] = "helo";
myArray[1] = true;
myArray[2] = 32;

console.log(myArray);

// Array properties
console.log(myArray.length);

// last element of array
console.log(myArray[myArray.length - 1]);

// LILO
myArray.push("school");
myArray.pop();

// FIFO
myArray.unshift(42);
myArray.shift();

delete myArray[1]; //don't use

// remove
myArray.splice(1, 1);

// replace
myArray.splice(1, 1, 42);

// add element specific index
myArray.splice(1, 0, 42);

// reverse array
myArray.reverse();

// convert to string
const arrToStr = myArray.join();

// convert to array
const strToArr = myArray.split(",");

// combine array
const arr1 = [1,2];
const arr2 = [3,4];
const newArr = arr1.concat(arr2);
const newArr1 = [...arr1,...arr2];
const newArr2 = [arr1,arr2];




console.log(myArray);
