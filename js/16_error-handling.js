/* 
    Javascript Error Handling -> benefit: rest code should be execute smoothly even we are getting error.
    1. try  -> write your error prone code.
    2. catch -> it should be execute when you get error.
    3. finally -> it should be execute even got error or success.
    4. throw -> use to throw error
*/

// const myName = "react";
// myName = "js"; // application break

try {
  const myName = "react";
  //   myName = "js"; // error throw
  throw {
    stack: "custom error",
    message: "throw custom erro"
  }
} catch (error) {
  //   console.log(error);
  console.error(error.message);
  //   console.warn(error);
  //   console.table(error);
  //   console.log(error.stack);
  //   console.log(error.message);
} finally {
  console.log("finally");
}

// Rest Code should be execute

const user = ["azhar"];
const course = ["html", "css"];
// console.log(user);
// console.log(course);
