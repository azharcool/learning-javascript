//Boolean -> true or false
console.log(true);
console.log(typeof "");

// convert string to boolean

// string value
// console.log(Boolean(""));
// console.log(Boolean("hi"));

// number value
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(-0));

// array or object value
console.log(Boolean(["we"]));
console.log(Boolean({}));
console.clear();
var myNum1 = 42;
var myNum2 = "42";
console.log(myNum1 == Number(myNum2)); // checking only value
console.log(myNum1 === myNum2); // checking both value & type
console.log(typeof myNum1, typeof myNum2);
