/*
    JSON (Javascript Object Notation)
    1. JSON is used to send and recieve the data.
    2. JSON is text format that is completely language independent.
    Meaning JSON is used to send & recieve data in many languages not just in javascript...

    1. send -> Json stringify
    2. recieve ->Json parse
*/

const userData = {
  name: "azhar",
};

const  send = JSON.stringify(userData) // convert to string
console.log(send);

const recieved = JSON.parse(send) // convert string to object or array
console.log(recieved.name);


const courses = ["Html", "css", "js"]
const sentCourse = JSON.stringify(courses);
console.log(sentCourse);

const receiveCourse = JSON.parse(sentCourse);
console.log(receiveCourse);

console.log(typeof JSON.stringify(0));
console.log(typeof JSON.parse(0));