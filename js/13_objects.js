/* 
    Object -> key values pair wrapped with curly braces {}.
    1. how to create object.
    2. how to access object. (using bracket, dot notation)
    3. how to set object. (using bracket, dot notation)
    4. this keyword. -> this keyword refer to an object
    5. object Methods -> keys, values and entries
    6. Iterate Object using for in loop,
*/

//array or object -> we can add new value or update
const myObj = {}; // {key: value}

console.log(myObj);
// set object key and values using dot notation
myObj.name = "reactjs"; //update the key value
myObj.course = "Html, css, js"; // new key and value added

// set object key and values using bracket notation
myObj["course"] = "nextjs,frame"; // update key value
myObj["duration"] = 3; // new key and value added.

// access object key and values (dot, bracket notation)
// dot notation (static)
console.log(myObj.name);

// bracket notation (dynamic)
const key = "course";
console.log(myObj);

// access keys and converted to  array form
console.log(Object.keys(myObj));

// access values and converted to  array form
console.log(Object.values(myObj));

// acces keys values and converted to  array form
console.log(Object.entries(myObj));

// const myArr = ["js", "css", "reactjs"];

// for(let i = 0; i < myArr.length; i++){
//     console.log(myArr[i]);
// }

// for(let i = 0; i< myObj.length; i++){
//     console.log(myObj[i]);
// }

// for in loop
// for (let i in myObj) {
//   console.log(myObj[i]);
// }

// Object.values(myObj).map((item, index, arr) => {
//   console.log(item, index, arr);
// });

// Object.keys(myObj).map((item, index, arr) => {
//   console.log(item);
// });

Object.entries(myObj).map(([key, value]) => {
  console.log(key, value);
});

console.clear();
console.log(window); // global object
console.log(this); // changeble

console.log(window === this);
console.clear();

const courses = {
  c_name: "css",
  getCourseName: () => {
    console.log(this); // belong window object

    return this.c_name;
  },
  getName: function () {
    console.log(this); // current object or calling

    return this.c_name;
  },
};

console.log(courses);
console.log(window === this);

// console.log(courses.getCourseName());

console.log(courses.getName());

// courses.getName();
