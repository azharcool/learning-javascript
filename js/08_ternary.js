// Conditional: ternary operator

// syntax
// condition ? if-conditon-true : if-condition-false
var isShopClose = false;
var order = "chicken";
var reply;

// order
//   ? (reply = `your order is ${order}`)
//   : (reply = "you don't have any order");
// false
isShopClose
  ? (reply = "shop will be open at 10 to 10")
  : order
  ? (reply = `your order is ${order}`)
  : (reply = "you don't have any order");

  console.log(reply);
