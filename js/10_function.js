// Function in Javascript (reusable code)
// Function is a block of code that is used to perform a execute when it is been called or invoke
// Function can be pure and impure function

// There are 3 ways to write function
// 1. Regular function declaration -> using function keyword
// 2. Regular function Expression -> using variable name
// 3. Arrow function  -> shorten way to write function

// Methods - built-in functions
// "rock".toLowerCase();
// Math.random();

// Function declaration
// function without parameter
// function addToNumber(){
//   console.log(10 + 20);
//   return 10 + 20
// }

// var result = addToNumber()
// console.log(result);

// function with parameter or argument
function addTwoNumber(num1, num2) {
  console.log(num2);
  console.log("undefined" === undefined);
  console.log(typeof num2); // return string value "undefined"

  // type guard or type check
  // if (typeof num2 !== "undefined" && typeof num1 !== "undefined") {
  //   return num1 + num2;
  // }

  var isNum1Type = typeof num1;
  var isNum2Type = typeof num2;
  var isNum1Valid = isNum1Type === "number";
  var isNum2Valid = isNum2Type === "number";

  if (isNum1Valid && isNum2Valid) {
    return num1 + num2;
  }

  // if(num1 !== undefined && num2 !== undefined){
  //   return num1 + num2
  // }

  return -1;
}
var result = addTwoNumber(true, false);
console.log(result);

var myEmail = "azhar.softwwwe@gmail.com";

// slice -> remove, replace, add
function getUserFromMail(email) {
  // return myEmail.slice(0, 5);
  return myEmail.slice(0, myEmail.indexOf("@"));
}
// console.log(getUserFromMail(myEmail));

var num = 10;

function getSum() {
  return (num = num + 10);
}

function getPureSum(num) {
  return (num = num + 10);
}

console.log(getPureSum(10)); // 20
console.log(getPureSum(10)); //30
console.log(getPureSum(10)); // 40
console.log(getPureSum(10)); // 50

console.log(getPureSum(40)); // 50
console.log(getPureSum(00)); // 50
console.log(getPureSum(10)); // 50
console.log(getPureSum(10)); // 50

console.log(getPureSum(100)); // 50

// function expression (function variable)
var getDomainFromMail = function (email = "") {
  var firstIndex = email.indexOf("@") + 1;
  var endIndex = email.indexOf(".");
  return email.slice(firstIndex, endIndex);
};
console.log(getDomainFromMail("azhar@git.org"));

// Arrow or fat arrow function
// var getExtensionFromMail = (email = "") => {
//   return email.slice(email.indexOf(".") + 1);
// };

var getExtensionFromMail = (email = "") => email.slice(email.indexOf(".") + 1);

console.log(getExtensionFromMail("azhar@gmail.com"));

var toProperCase = (name = "") => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("RoCK"));
