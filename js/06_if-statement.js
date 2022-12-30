// Conditional: if statement

// syntax
if (condition) {
  // run some code
} else {
  // run some different code.
}

// var order = "chicken noodles";
// var reply;
// if(order){
//    reply = `your order is ${order}`
// }else {
//     reply = "sorry, you don't order"
// }

// console.log(reply);

var isShopClose = true;
var order = "chicke noodles";
var response;
if (isShopClose) {
  response = "shop will be open at 10AM to 6AM";
} else if (order) {
  reply = `your order is ${order}`;
} else {
  reply = "sorry, you don't order";
}
console.log(reply);

var yourScore = 89;
var finalGrade;

if (yourScore >= 90) {
  finalGrade = "A";
} else if (yourScore >= 80) {
  finalGrade = "B";
}else if(yourScore >= 70){
    finalGrade = "C";
}else if(yourScore >= 70){
    finalGrade = "D";
}else {
    console.log("failed");
}
