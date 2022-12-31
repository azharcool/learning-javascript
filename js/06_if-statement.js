// Conditional: if statement

// syntax
// if(condition){
//   run some code
// }else {
//   run different code
// }

// var order = "";
// var reply;

// // true true
// if(order){
//  reply = `your order is ${order}`
// }else {
//   reply = "you don't have any order"
// }

// console.log(reply);

// console.log(reply);

var isShopClose = false;
var order = "";
var response;

if (isShopClose) {
  response = "shop will be open at 10AM to 10PM";
} else if (order) {
  response = `your order is ${order}`;
} else {
  response = "you don't have any order";
}

console.log(response);

var myScore = 59;
var finalGrade;


// ladder if-else statement
if (myScore >= 90) {
  finalGrade = "A";
} else if (myScore >= 80) {
  finalGrade = "B";
} else if (myScore >= 70) {
  finalGrade = "C";
} else if (myScore >= 60) {
  finalGrade = "D";
} else {
  console.log("failed");
}
