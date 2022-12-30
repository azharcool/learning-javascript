// loop Iteration in Javascript
// while loop
// do while loop
// for loop

// dont create endless loop (infinite)

// variable declaration and initialization
// condition
// increment or decrement


var myNumber = 0;
while(myNumber < 50){
    console.log(myNumber);
    // myNumber++;
    myNumber+=2;
}

while (myNumber) {
  console.log(`number: ${myNumber}`);
  if (myNumber === 10) break;
  myNumber++;
}

do {
  console.log(myNumber);
//   myNumber++;
} while (myNumber);


var num = 0;
for (; ; ) ;

for(var i = 0; i<50; i++){
    console.log(i);
}

var myName = "rocky-adiy";
for (var i = 0; i <= myName.length-1; i++) {
  console.log(myName.charAt(i));
  // console.log(myName[i]);
}

// infinite loop
var myName = "rock";
var myNameLetter;
var counter = 0;

while (true) {
  myNameLetter = myName.charAt(counter);
  console.log(myNameLetter);
  if (myNameLetter === "k") break;
  counter++;
}