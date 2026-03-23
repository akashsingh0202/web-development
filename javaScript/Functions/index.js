// function myFun(){
//     console.log("My self akash");
//     console.log("i am learning JS")
// }

// myFun()

//argument

// function myFun1(msg){
//     console.log(msg);
// }
// myFun1("hii ")

// function myfun(x,y){
//     console.log(x+y);
// }
// myfun(4,5);
// myfun(9,5);

// function myfun(x,y){
//     s=x+y;
//     console.log("Before return");
//     return s;
//     console.log("After return");
// }
// let val=myfun(4,5);
// console.log(val)
// let ss=myfun(9,5);
// console.log(ss)

//Arrow Function
//sem function
// function sum(a,b){
//     return a+b;
// }

// //arrow func
// const arrowSum=(a,b)=>{
//     console.log(a+b);
// };
// arrowSum(3,5);

// function mul(a,b){
//     return a*b;
// }

// //arrow func
// const arrowMul=(a,b)=>{
//     console.log(a*b);
// };
// arrowMul(5,3);


// function countVowel(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if (str[i]==="a"||str[i]==="e"||str[i] ==="i"||str[i]==="o"||str[i]==="u"||str[i]==="A"||str[i]==="E"||str[i]==="I"||str[i]==="O"||str[i]==="U")
//             {
//                 count++;
//             }
//     }
//     return count;
// }


// const countVowel=(str)=>{let count=0;
//     for(let i=0;i<str.length;i++){
//         if (str[i]==="a"||str[i]==="e"||str[i] ==="i"||str[i]==="o"||str[i]==="u"||str[i]==="A"||str[i]==="E"||str[i]==="I"||str[i]==="O"||str[i]==="U")
//             {
//                 count++;
//             }
//     }
//     return count
// }

//ForEach loop

// let arr=[1,2,2,3,4,5,7];
// arr.forEach(function printVal(val){
//     console.log(val);
// })
// arr.forEach((val)=>console.log(val));


// let arr=[1,2,3,4,5]
// arr.forEach((num) => {
//     console.log(num*num);
// });

//map method

// let nums=[12,23,45,78];
// let newArr=nums.map((val)=>{
//     return val*val
// });
// console.log(newArr)

//filter method

// let nums=[1,2,2,3,4,5,7,8];
// let evenNo=nums.filter((val)=>{
//     return val%2==0;
// });
// console.log(evenNo)


//Reduce method
// let arr=[1,2,3,4,5,6,72]
// let sui=0;
// let sum=arr.reduce((res,cur)=>{
//     return res+cur;
// });
// console.log(sum);

// let marks=[92,82,93,47,95,97,18];
// let total=marks.filter((val)=>{
//     return val>90;
// });
// console.log(total);

let n=prompt("enter a number");
let a=[];
for(i=1;i<=n;i++){
    a[i-1]=i;
}
console.log(a);
let iv=0;
let sum=a.reduce((res,cur)=>{
    // return res+cur;
    return res*cur;
});
console.log(sum);