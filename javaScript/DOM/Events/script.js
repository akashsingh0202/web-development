// document.getElementById("btn").ondblclick = function () {
//     console.log("button was clicked 2 times");
// };

// let btn1=document.querySelector("#btn1");

// btn1.onclick = ()=>{
//   console.log("button was clicked");
// }

// let btn2=document.querySelector("#btn2");

// btn2.ondblclick = ()=>{
//   console.log("button was clicked");
// }

// let para=document.querySelector(".A");
// para. onmouseover=()=>{
//     console.log("you are in range");
// }
// btn1.addEventListener("click",()=>{
//    console.log ("button clicked")
// });

let modeBtn=document.querySelector("#mode");
let currMode="light";

modeBtn.addEventListener("click", () => {
    if(currMode==="light"){
        currMode="Dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
    }
    else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
    }
    console.log(currMode);
});