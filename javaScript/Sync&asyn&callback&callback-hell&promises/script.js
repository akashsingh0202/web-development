// Synchronus programming 
// it simply says that code run start to end line by line
// console.log ("akash");
// console.log ("aman");
// console.log ("abhay");

///Asynchronus programming

// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("hello")
// }, 4000);


// console.log("three");


//Callback
// const hello=()=>{
//    console.log("hello");
// }

// setTimeout(hello,3000);



function getData(dataId,getNextData){
    setTimeout=(()=>{
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

//Callback hell
getData(1,()=>{
    console.log("getting data2");
      getData(2,()=>{
      console.log("getting data3");
       getData(1,()=>{
       console.log("getting data4");
       getData(4);
   });
  });
});