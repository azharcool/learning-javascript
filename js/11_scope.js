// Scope types
// 1. global scope
// 2. function scope
// 3. block scope

// var x = 10; // declared
// var x = 20; // re-declared
// x = 30; // re-initialize

// let y = 10;
// let y = 20; // can't re-declared
// y = 30// can  re-initialize

// const z = 10;
// const z = 20; // can't re-declared
// z= 30; //can't initialize

// Global Scope
var x = 1; // function scope
let y = 2; // block scope
const z = 3; // block scope

// Local or block Scope
{
  let y = 4;
  console.log(y);
}

// function Scope
function myFunc() {
  let z = 5;
  console.log(z);

  // Local or block Scope
  {
    let y = 4;
    console.log(y);
  }
}
