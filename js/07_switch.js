// Switch Statement -> decision making statment
// syntax
// 1 === "one" -> false
// 1 === 1 -> true

// strictly -> type + value
// only value
// switch(1){
//     case "one":
//     // write some code
//     break;

//     case 1:
//     // write some code
//     break;

//     default:
//     // final code

// }

// type + value -> strictly
// console.log(1 === "1"); // false
// console.log(1 == "1"); // true
// console.log(89 === true); // true

var myKey = "1";
var isKeyAvailable = undefined;
switch (myKey) {
  case "1":
    isKeyAvailable = false;
    break;
  case 1:
    isKeyAvailable = true;
    break;
  default:
    console.log("not found");
}

// console.log(isKeyAvailable);

var myScore = 80;
var finalGrade;

// console.log(myScore > 90); // false
console.clear();
console.log(false === false);
switch (true) {
  case false: {
    finalGrade = "A";
    break;
  }

  case true: {
    finalGrade = "B";
    break;
  }
  default:
    console.log("not found");
}

console.log(finalGrade);
