// loop Iteration in Javascript
// while loop
// do while loop
// for loop

// dont create endless loop (infinite)

// Requirement
//1. variable declaration  and initialization
//2. condition
//3. increment or decrement

// While loop -> 10 t0 50
// var myNumber = 10;
// while (myNumber <= 50) {
//   console.log(myNumber);
//   // incr or dec
//   myNumber++; // post increment
//   // ++myNumber; // pre increment
//   // myNumber = myNumber + 1;
//   // myNumber +=2;
// }
console.clear();

// how to write infinite loop
// Note: avoid true value ( "hi", 1, true, [], {})

// var myNumber = 10;
// while (true) {
//   console.log(myNumber);
//   if (myNumber === 15) {
//     break;
//   }
//   myNumber++;
// }

// do {
//   console.log(`number ${myNumber}`);
//   myNumber++;
// } while (myNumber <= 50);

// difference between do while and while loop
// do while execute atleast one time even the condition is false or failed
// while not execute if the condition is false or failed
// var myNumber = 0;
// while(0){
//   console.log(`number ${myNumber}`);
// }

// do{
//   console.log(`do ${myNumber}`);
// }while(0)

// var num = 0;
// // for (; ; ) ;

// expression
// for (var num = 10; num <= 50; num++) {
//   console.log(num);
// }

// var num = 10;
// for(;num <= 50; ){
//   console.log(num);
//   num++
// }

var myName = "javascript";
for(var i = 0; i<= myName.length-1; i++){
  console.log(myName.charAt(i));
}

// for (var i = 0; i <= myName.length - 1; i++) {
//   console.log(myName.charAt(i));
//   // console.log(myName[i]);
// }

// // infinite loop
// var myName = "rock";
// var myNameLetter;
// var counter = 0;

// while (true) {
//   myNameLetter = myName.charAt(counter);
//   console.log(myNameLetter);
//   if (myNameLetter === "k") break;
//   counter++;
// }
