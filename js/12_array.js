// Arrays
// 1. Array properties. (length)
// 2. Add element in an array.
// 3. How to access array element.
// 4. How to access last element of array.
// 5. Array methods (push, pop, shift, unshift, reverse).
// 6. Remove element from Array using splice.
// 7. Replace element from Array using splice.
// 8. Add element at specific index using splice.
// 10. Convert array to string.
// 11. Combine array

/* 
Arrays -> collection of different data type of element.
1. How to create array.
2. Add element in an array.
3. How to access element from an array.
4. How to access last element from an array.
5. Array Methods (push, pop, unshift, shift, splice, reverse, map)
6. delete keyword.
7. splice (Add, remove, replace at pos)
8. convert array to string.
9. convert string to array.
10. combine array
11. ES6 feature -> spread operator, rest operator

Spread Operator -> Extract value from array or object.
Rest Operator -> Transform value into array.

*/

// Array create
var myArray = [];

// add element in an array
myArray[0] = 10;
myArray[1] = true;
myArray[2] = "azhar";

console.log(myArray);

// Access array element
console.log(myArray[2]);

// array properties
console.log(myArray.length);

// access last element of an array
console.log(myArray[myArray.length - 1]);

// Array Methods (push, pop, unshift, shift, splice)
// splice -> can remove, add, replace at particular position from an array.
const stack = ["js", "reactJS"];
// stack.push("react-native");
// const newLength = stack.push("angular");
// const popped = stack.pop();

stack.unshift("css");
stack.unshift("html");

// stack.shift();

// console.log(stack);

// Remove element from an array
// delete stack[2]; // don't use
// stack.splice(1, 1);
// console.log(stack);

// stack.splice(1, 0, "html5", "css3", "scss");
// stack.splice(1, 1, "css3")

// stack.reverse()

// Converted array to string
const stackStr = stack.join(", ");

// Convert string to array
const stackArr = stackStr.split(",");

// concat
const arr1 = ["html", "css"];
const arr2 = ["js", "reactjs"];

// concat()
const combineArr = arr2.concat(arr1);

// ES6 feature -> using spread operator
const newArr = [...arr1, ...arr2]; // ["html", "css", ["js", "react"]]

// ES6 feature -> using destructure
const [html] = newArr;

// ES6 feature -> Rest operator
const [html1, css, ...rest] = newArr;

console.log(html, newArr[0], rest);

console.log(newArr);

const myNumArr = [2, 3, 4, 5]; // [4, 5, 6, 7]

const newMyNumArr = [];
for (let index = 0; index < myNumArr.length; index++) {
  newMyNumArr.push(myNumArr[index] + 2);
}

const added = myNumArr.map((item) => item + 2);

console.log(myNumArr);
console.log(added);
