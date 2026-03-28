// const t1=performance.now();
// for (let i=1;i<=100;i++){
 
//     let newElement=document.createElement("p");
//     newElement.textContent="this is para"+i;
//     document.body.appendChild(newElement);
// }
// const t2=performance.now();
// console.log("this took"+(t2-t1)+"ms");


// //optimising a bit 
// const t3=performance.now();
// let myDiv=document.createElement("p");
// for (let i=1;i<=100;i++){
 
//     let element=document.createElement("p");
//     element.textContent="this is para"+i;
//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4=performance.now();
// console.log("this took"+(t4-t3)+"ms");




// let fragment=document.createDocumentFragment();
//  for (let i=1;i<=100;i++){
 
//     let newElement=document.createElement("p");
//     newElement.textContent="this is para"+i;
//     fragment.appendChild(newElement);
//  }
//  document.body.appendChild(fragment);

// window.addEventListener("scroll", () => {
//     console.log("scrolling...");
// });
// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 2000);

// console.log("3");