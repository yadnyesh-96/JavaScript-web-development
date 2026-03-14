

const promise = new Promise(function (resolve, reject) {

    let success = true;
    if (success) {
        resolve('Task Completed');
    } else {
        reject("Task Failed");
    }
});

promise
    .then(function (result) {
        console.log(result);
    })
    .catch(function (err) {
        console.log(err);
    })


const myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Data recived..... ");
    }, 1000);
});

myPromise
    .then(function (res) {
        console.log(res);
    })
    .catch(function (error) {
        console.log(error);
    })


// Promise chaining 
let opPromise = new Promise(function (resolve, reject) {
    resolve(20);
})

opPromise
    .then(function (num) {
        return num * 2;
    })
    .then(function (res) {
        console.log(res);
    });

// with cath block gives the error 

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.jason())
    .then(data => console.log(data))
    .catch(err => console.log("Error is :", err));



// Promise mini-API project 

const output = document.getElementById("output");
const btn = document.getElementById("loadBtn");

const userURL = "https://jsonplaceholder.typicode.com/users/1";
const postsURL = "https://jsonplaceholder.typicode.com/posts?userId=1";
const todosURL = "https://jsonplaceholder.typicode.com/todos?userId=1";


async function loadAllData() {
    try {
        const [userResponse, postsResponse, todoResponse] = await Promise.all([
            fetch(userURL),
            fetch(postsURL),
            fetch(todosURL)
        ]);
        const user = await userResponse.json();
        const posts = await postsResponse.json();
        const todos = await todoResponse.json();

        output.textContent = `
        USER : ${user.name}
        POST COUNT : ${posts.length}
        TODOs COUNT : ${todos.length}`;


    } catch (error) {
        output.textContent = "Error Loading data :" + error;
    }
}

async function fastestResponse() {
    const res = await Promise.race([
        fetch(userURL),
        fetch(postsURL),
        fetch(todosURL)
    ]);

    const data = await res.json();
    console.log("Fastest API Data:", data);
}


async function firstSuccess() {
    try {
        const res = await Promise.any([
            fetch("wrong_url"),
            fetch(userURL),
            fetch(postsURL)
        ]);

        const data = await res.json();
        console.log("First successful:", data);
    } catch (err) {
        console.log(err);
    }
}

async function reportAll() {
    const results = await Promise.allSettled([
        fetch(userURL),
        fetch("wrong_url"),
        fetch(todosURL)
    ]);

    console.log("All Settled Report:", results);
}

btn.addEventListener("click", () => {
    loadAllData();      // main dashboard
    fastestResponse();  // race demo
    firstSuccess();     // any demo
    reportAll();        // settled demo
});