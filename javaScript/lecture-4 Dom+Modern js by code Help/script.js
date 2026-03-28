// // console.log("Start");

// // setTimeout(() => {
// //   console.log("Async Task");
// // }, 2000);

// // console.log("End");

// async function getData() {
//   let res = await fetch("https://api.example.com");
//   console.log(res);
// }


// fetch("https://api.example.com/users")
//   .then(res => res.json())
//   .then(data => console.log(data));
// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     name: "Akash",
//     email: "akash@gmail.com"
//   })
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/users/1", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     name: "Akash Singh",
//     email: "new@gmail.com"
//   })
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/users/1", {
//   method: "DELETE"
// })
// .then(res => {
//   if (res.ok) {
//     console.log("Data deleted successfully");
//   } else {
//     console.log("Delete failed");
//   }
// })
// .catch(err => console.log(err));
// let promise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Kaam ho gaya ✅");
//   } else {
//     reject("Error aa gaya ❌");
//   }
// });

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data mil gaya");
//   }, 2000);
// });

// p.then(data => console.log(data))
//  .catch(err => console.log(err));


// let p = new Promise((resolve, reject) => {
//   resolve(2);
// });

// p.then(num => {
//   console.log(num);   // 2
//   return num * 2;
// })
// .then(result => {
//   console.log(result); // 4
//   return result * 2;
// })
// .then(final => {
//   console.log(final); // 8
// });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())   // step 1
//   .then(data => {
//     console.log(data);       // step 2
//     return data[0];
//   })
//   .then(user => {
//     console.log(user.name);  // step 3
//   })
//   .catch(err => console.log(err));


// async function myFunc() {
//   return "Hello";
// }

// async function getData() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(res);
// }

// async function getData() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
    
//     let data = await res.json();
    
//     console.log(data);
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

// getData();




// function bankAccount() {
//   let balance = 1000;

//   return function() {
//     balance += 100;
//     console.log(balance);
//   };
// }

// let account = bankAccount();
// account(); // 1100


// function createCounter() {
//   let count = 0;

//   return function() {
//     return ++count;
//   };
// }

// let c1 = createCounter();

// console.log(c1()); // 1
// console.log(c1()); // 2

// console.log(c1());

function greet(name) {
  return function() {
    console.log("Hello " + name);
  };
}

let sayHello = greet("Akash");

sayHello(); // Hello Akash