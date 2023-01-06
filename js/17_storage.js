/* 
    Web Storage API
    Not part of the DOM - refer to the Window API
    Available to JS via the global variable (window)


    There are two to persist data in JS?
    1. localstorage. -> setItem, getItem, clear, removeItem, 
    2. sessionstorage. -> setItem, getItem, clear, removeItem, 

    local vs session
    ---------------
    1. local data should be remove by ourself.
    2. session data will be clear whenever browser close or session expire
*/

// Stored Data in LocalStorage
const courses = ["html", "css", "js"];

localStorage.setItem("course", courses);

const user = {
  name: "azhar",
  company: "Tech",
};

localStorage.setItem("user", JSON.stringify(user));

// Access Data from localStorage
const getUser = localStorage.getItem("user");
console.log(getUser.name);
console.log(JSON.parse(getUser));


// clear all persist localstorage data
// localStorage.clear();

// clear only passed key  persist localstorage data
// localStorage.removeItem("course")

// ================================================================

// Session storage.

const sessionData = { session: 1, sessionName: "session"}
sessionStorage.setItem("session", JSON.stringify(sessionData))


