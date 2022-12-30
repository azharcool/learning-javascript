
// String
var myName = "name";
var myLast = "javascript"
var emptyStr = "        ";
console.log(typeof emptyStr);
console.log(myName);
console.log(myLast);
console.log(myName + myLast); // concat two string variable.
console.log(`my  name is ${myName} ${myName} ` ); // template string

var myCount = "1";
var myLastCount = "0";
console.log(myCount + myLastCount);

// String Method and Properties
console.log(myName.length);
console.log( myLast.charAt(myLast.length -1)); // return one char by passing index or pos
console.log(myLast.indexOf("scripts")); // case-sensitive
console.log(myLast.includes("script")); // case-sensitive
console.log(myLast.toUpperCase());
console.log(myLast.toLowerCase());

console.log("hello".slice(1, 3)); // 0,1,2,3,4 ->1,2,3 -> 1,2
console.log("hello".slice(5)); // -2,-1,0,1,2,3,4,5
console.log("hello,hi,bye".split("{"));
 console.log("hello,hi,bye".split(""));