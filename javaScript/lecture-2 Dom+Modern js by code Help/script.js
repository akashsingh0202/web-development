// let a=document.querySelector("h1");
// console.log(a);
// a.addEventListener("click",function(){
//     a.style.color="red";
//     console.log("i'm clicking this")
// })

// let links=document.querySelectorAll("a");
// let thirdLinks=links[2];
// thirdLinks.addEventListener("click",function(event){
//     event.preventDefault();
//     console.log("Lol")
// })
// let myDiv= document.createElement("div");
// function paraStatus(event){
//     console.log("i have clicked on para"+event.target.textContent);

// }
// newElement.addEventListener("click",paraStatus);
// for(let i=1;1<=100;i++){
//     let newElement=document.createElement("p");
//     newElement.textContent="i am para"+i;
    
//     myDiv.appendChild(newElement);

// }
// document.body.appendChild(myDiv);

// let element=document.querySelector("#wrapper");
// element.addEventListener("click",function(event){
//     if(event.target.nodeName==="SPAN"){
//     console.log("span par click kiya hai",+event.target.textContent)
//     }
// })


//events in js
//#1 Click
// let btn =document.querySelector(".btn");
// btn.addEventListener("click",function(){
//     console.log("akash")
// });

//#2 input
// let input = document.querySelector("#name");

//JAB USER LIKHEGA TAB KUCH SHOW KAREGA LIKE USER IS TYPING
// input.addEventListener("input", () => {
//     console.log("User typing...");
// });

//JO USER VALUE DEGA VO PRINT KAREGA 
// input.addEventListener("input", (e) => {
//     console.log(e.target.value);
// });
//MINIMUM 5 CHARACTER CHAHIYE
// input.addEventListener("input", (e) => {
//     if(e.target.value.length < 5){
//         console.log("Minimum 5 characters chahiye");
//     }
// });


//#3-Change
// let input = document.querySelector("#name");

// input.addEventListener("change", (e) => {
//     console.log("Final value:", e.target.value);
// });
// document.querySelector("#city").addEventListener("change", (e) => {
//     console.log("Selected:", e.target.value);
// });

// document.querySelector("#agree").addEventListener("change", (e) => {
//     console.log(e.target.checked);
// });

//#4 Submit

let form = document.querySelector("#myForm");

// form.addEventListener("submit", (e) => {
//     console.log("Form submitted");
// });

//reload rokta h
// form.addEventListener("submit", (e) => {
//     e.preventDefault(); // reload rok diya
//     console.log("Form handled by JS");
// });
//form validation
//     form.addEventListener("submit", (e) => {
//     e.preventDefault();
    
//     let input = document.querySelector("input").value;
    
//     if(input === ""){
//         console.log("Input required!");
//     } else {
//         console.log("Form submitted:", input);
//     }
// });


//#5-keydown
// let output = document.getElementById("output");

//     document.addEventListener("keydown", function(e) {
//         output.innerText = "You pressed: " + e.key;
//     });
// let box = document.getElementById("box");
//     let x = 100;
//     let y = 100;

//     document.addEventListener("keydown", function(e) {
//         if(e.key === "ArrowRight") x += 10;
//         if(e.key === "ArrowLeft") x -= 10;
//         if(e.key === "ArrowUp") y -= 10;
//         if(e.key === "ArrowDown") y += 10;

//         box.style.left = x + "px";
//         box.style.top = y + "px";
//     });

//#6-keyup

// document.addEventListener("keyup", (e) => {
//     console.log("Key released:", e.key);
// });


//#7-onmouseover
// let box = document.getElementById("box");

// box.addEventListener("mouseover", () => {
//     console.log("Mouse aa gaya box ke upar");
// });
// let box = document.getElementById("box");

// box.addEventListener("mouseover", () => {
//     box.style.background = "blue";
// });

//#8-onmouseout
// let box = document.getElementById("box");

// box.addEventListener("mouseout", () => {
//     console.log("Mouse box se bahar gaya");
// });


//combo
// let box = document.getElementById("box");

// box.addEventListener("mouseover", () => {
//     box.style.background = "blue";
// });

// box.addEventListener("mouseout", () => {
//     box.style.background = "red";
// });


//#9-load
// window.addEventListener("load", () => {
//     document.getElementById("msg").innerText = "Page Loaded ✅";
// });

//#10-scroll
window.addEventListener("scroll", () => {
    let nav = document.getElementById("navbar");

    if(window.scrollY > 100){
        nav.style.background = "black";
    } else {
        nav.style.background = "red";
    }
});