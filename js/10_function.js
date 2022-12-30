// Function in Javascript (reusable code)
// Function is a block of code that is used to perform a execute when it is been called or invoke
// There are 3 ways to write function
// function declaration -> using function keyword
// function Expression -> using variable name
// Arrow function  -> shorten way to write function

// Methods - built-in functions
"rock".toLowerCase();
Math.random();


// Function declaration
// function without parameter
function sum(){
    return 2+2;
}

function sumTwoNumberWithoutParam() {
  return 10 + 30;
}

function sumTwoNumberWithParam(a = 0, b = 0) {
  console.log(a);
  console.log(b);
  console.log(typeof a);
  console.log(typeof undefined);
  console.log(undefined === undefined);
  console.log(undefined !== undefined);
  console.log(typeof a !== "undefined");

  //   Typeguard
  if (b !== undefined && a !== undefined) {
    return a + b;
  }

  return -1;
}

function getUserNameFromEmail(email=""){
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("azhar@gmail.com"));

// function variable
const getUserNameFromEmail = function(email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("azhar@gmail.com"));

// Arrow or fat arrow function
// const getUserNameFromEmail = (email) => {
//     return email.slice(0, email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("azhar@gmail.com"));

var toProperCase = (name="") => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toProperCase("RoCK"));