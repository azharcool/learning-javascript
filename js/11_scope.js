/* 
  Scope
  ------
  1. scope is visibility or access of variable or function.
  2. Scope types:  
    1. global scope -> it should be outside of function or block
    2. lobal scope (block scope or function scope) -> it should be inside of function or block.

  difference between var, let, and const
  1. var ->
    1. It is function scope, if variable declared inside function otherwise global scope.
    2. It can be re-declared.
    3. It can be re-initialized.

  2. let -> 
    1. It is block scope, if variable declared inside curly block otherwise global scope.
    2. It can't be re-declared.
    3. It can be re-initialized.

  3. const -> 
    1.  It is block scope, if variable declared inside curly block otherwise global scope.
    2. It can't be re-declared.
    3. It can't be re-initialized.

*/

// Variable declared with initialization
var myVar = "helo";

// Variable re-declared
var myVar = true;

// Variable re-initialize
var myVar = "helo"; // already value assigned
myVar = true; // re-assigned  (re-initialized)
myVar = 0; // re-assigned  (re-initialized)
myVar = 20; // re-assigned  (re-initialized)

var myNumber = 10;
// Regular function  -> function delcaration
function myfunction() {
  var myFunNumber = 30;
  console.log(`my functio block ${myFunNumber}`);
}

var x = 10; // global scope
let y = 20; // global scope
const z = 30; // global scope

{
  let y = 30; // local scope or block
  const z = 40; // local scope or block
  var x = 30; //global scope

  console.log(`block scope of y: ${y}`);
  console.log(`block scope of z: ${z}`);
}

console.log(`global scope of x:  ${x}`); // 30
console.log(`global scope of y:  ${y}`); // 20
console.log(`global scope of z:  ${z}`); // 30

function myFunction() {
  var x = "fu";
  let y = "Helo";
  const z = "no-value";

  {
    let y = 30; // local scope or block
    const z = 40; // local scope or block
    var x = 30; //global scope

    console.log(`block scope of y: ${y}`);
    console.log(`block scope of z: ${z}`);
  }

  if(true){
    var x = "redeclared"

    {
      let y = 30; 
    }
  }

  console.log(`function scope of x: ${x}`); //30
  console.log(`block scope of y: ${y}`);
  console.log(`block scope of z: ${z}`);
}

myFunction();
