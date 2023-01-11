/*
    Javacript Async -> calling parallel
    Asynchronous mean, function running parallel with other function.
    Different way to write async function.
    1. callback -> callback is a function passed as an argument of another function,  multiple callback function lead callback hell, to avoid callback hell use promises.
    2. promise -> promise object is use to handler asynchronous function, 
    3. async and await -> easier to write async code.

    fetch API -> use for calling back-end end-point or API (application programming interface) 

*/

//! Callback function
function add(a, b, callback) {
  const result = a + b;
  const res = callback(result)()()();
  //   console.log(res);
}

function display(result) {
  console.log(`Result of Two Numbers: ${result}`);
}

// add(10, 20, (res) => {
//   console.log(`Result: ${res}`);
// });
//! callback hell
// add(10, 20, () => {
//   console.log("first calling");
//   return () => {
//     console.log("second calling");

//     return () => {
//       console.log("third calling");

//       return () => {
//         console.log("callback hell");
//       }
//     };
//   };
// });

//! Promises
//! Promise state -> pending,success,settled

// Constructor function

function Fun(name) {
  this.myName = name;
  this.getName = () => {
    return this.myName;
  };
}

const con = new Fun("azhar");
console.log(con);

const promise = new Promise((resolve, reject) => {
  // resolve -> success or fullfilled
  // reject -> error

  try {
    const num = 10;
    // num = 30;
    resolve(num);
  } catch (error) {
    reject(error);
  }
});

promise
  .then((data) => {
    console.log("data: ", data);
    return data;
  })
  .then((res) => {
    console.log(res);
  });

console.log("another statement....");

// const fetchPost = fetch(url);
// console.log(fetchPost);

const fetchPost = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const resJson = await response.json();
    console.log(resJson);
  } catch (error) {
    console.log("error: ", error);
  }

  //   fetch(url)
  //     .then((response) => {
  //     //   return response.json();
  //     })
  //     .then((resJson) => {
  //       console.log(resJson);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
};

fetchPost();
