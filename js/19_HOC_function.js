// map -> no filter data,
// foreach
// filter -> filter data, evaluate based on true or false
// find
// findIndex
// sort
// some
// every
// reduce

const techUser = [
  {
    id: 1,
    name: "azhar",
    gender: "male",
    isPresent: true,
  },
  {
    id: 2,
    name: "pranay",
    gender: "male",
    isPresent: true,
  },
  {
    id: 3,
    name: "ayush",
    gender: "male",
    isPresent: true,
  },
  {
    id: 4,
    name: "pallavi",
    gender: "female",
    isPresent: true,
  },
  {
    id: 5,
    name: "adit",
    gender: "male",
    isPresent: true,
  },

  {
    id: 6,
    name: "tushar",
    gender: "male",
    isPresent: false,
  },
]; // array of object

// list out all user
console.log(techUser);

// Map return new array
const userName = techUser.map((item, index, arr) => {
  //   console.log(`Name: ${item.name}, Present: ${item.isPresent ? "Yes" : "No"}`);
  return item;
});

console.log({ userName });
// console.clear()

// Foreach return undefine mean nothing
const tech = techUser.forEach((item, index, arr) => {
  //   console.log(`Name: ${item.name}, Present: ${item.isPresent ? "Yes" : "No"}`);
});
// console.log(tech);

const obj = {
  id: 6,
  name: "tushar",
  gender: "male",
  isPresent: false,
};

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// Object.keys(obj).map((i) => {
//   console.log(i);
// });

// Object.values(obj).map((i) => {
//   console.log(i);
// });

// Object.entries(obj).map(([key, value]) => {
//   // console.log(`key: ${i[0]}, value: ${i[1]}`);
//   console.log(`key: ${key}`);
// });

//evaluate ->  true or false

const presentUserList = techUser.filter((item, index, arr) => {
  //   console.log(item.id, Boolean(item.isPresent || false));
  //  return !item.isPresent
  //   return item.isPresent ? false : true;
  //   return item.isPresent === true ? true : false;
  return item.isPresent;
});

// console.clear();
const allMaleUserList = techUser.filter((item) => {
  //   console.log(item.gender, item.gender === "male");
  return item.gender === "male" ? true : false;
  //   return item.gender.charAt("male");
});

const allFemaleMaleUserList = techUser.filter((item) => {
  //   console.log(item.gender, item.gender === "male");
  return item.gender === "female" ? true : false;
  //   return item.gender.startsWith("female");
});

// console.log(allMaleUserList);
// console.log(allFemaleMaleUserList);

const filterUserById = techUser.filter((i) => i.id === 1);
console.log(filterUserById);

const findUserById = techUser.find((i) => i.id === 1);
console.log(findUserById);

const filterApple = ["apple", "mango", "banana"].filter((i) => i === "apple");
console.log(filterApple);

const findApple = ["apple", "mango", "banana"].find((i) => i === "apple");

const findIndex = ["apple", "mango", "banana"].findIndex(
  (i) => i.toLowerCase() === "mangO".toLowerCase()
);
console.log(findIndex);

// by default return ascending order

const sortFruit = ["Banana", "Cherry", "Apple", "Dragon"].sort();
console.log(sortFruit.reverse());

// a -b  -> return ascending order
// b - a -> return descending order

const numberArr = [40, 100, 1, 5, 25, 10]
// const newArr = numberArr.concat([]);
// const newArr = [...numberArr]; 
const newArr = JSON.parse(JSON.stringify(numberArr))
const sortNumber = newArr.sort((a, b) => {
  // 40 -100 -> -60 (negative) -> [100, 40, 1, 5, 25, 10]

  return b - a;
});

console.log(numberArr);
console.log(sortNumber);

// Get all id user between 3 to 6, it should be present.
