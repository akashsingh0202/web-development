//document.getElementById("a")
// let element1=document.getElementById("a");
// console.log(element1);

//document.getElementsByClassName("className")
// let element2=document.getElementsByClassName("b");
// console.log(element2);

//document.getElementsByTagName()

// let element3=document.getElementsByTagName("h3");
// console.log(element3);

// let a=document.querySelector("#title");
// console.log(a);

// let b=document.querySelector(".text")
// console.log(b);

// let c =document.querySelector("p");
// console.log(c);


// let el = document.getElementById("box");
// console.log(el.innerHTML);
// el.innerHTML = "<h1>Hello</h1>";
// console.log(el.innerHTML);
// let el = document.getElementById("box");



// console.log(el.innerText);
// el.innerText = "New Text";
// console.log(el.innerText);


// let el = document.getElementById("box");
// console.log(el.outerHTML);
// el.outerHTML = "<section>New Content</section>";
// console.log(el.outerHTML);

// let el = document.getElementById("box");

// console.log(el.textContent);
// el.textContent = "New Text";
// console.log(el.textContent);

// let p = document.createElement("p");
// p.innerText = "Hello Akash";
// document.body.appendChild(p);
// let h1 = document.createElement("h1");
// h1.innerText = "Welcome";
// document.body.appendChild(h1);

// let p = document.createElement("p");        // element banaya
// let text = document.createTextNode("Hello"); // text banaya

// p.appendChild(text);                        // text ko element me add kiya
// document.body.appendChild(p);               // element ko page me add kiya


// let el = document.getElementById("box");
// el.insertAdjacentHTML("beforebegin", "<p>Before</p>");
// el.insertAdjacentHTML("afterbegin", "<p>after</p>");
// el.insertAdjacentHTML("beforeend", "<p>End</p>");
// el.insertAdjacentHTML("afterend", "<p>After</p>");


// let parent = document.getElementById("list");
// let child = document.getElementById("item2");

// parent.removeChild(child);//old way
///mordern way
// child.remove()

//css styling
//using .style
// let el = document.querySelector("h1");

// el.style.color = "red";
// el.style.backgroundColor = "yellow";
// el.style.fontSize = "30px";

// //using classList
// let el = document.querySelector("h1");

// el.classList.add("red");    // class add
// el.classList.remove("red"); // class remove
// el.classList.toggle("red"); // on/off

// function change() {
//   let el = document.getElementById("text");

// //   el.classList.add("red");   // color red
// //   el.classList.add("big");    // size bada
//      el.classList.remove("red"); //remove the class
//      el.classList.toggle("red");//toggle
//      el.classList.contains("red"); True/False rreturn karta h
// }

// let el = document.querySelector("h1");

// el.style.cssText = "color: red; font-size: 30px; background: yellow;";

