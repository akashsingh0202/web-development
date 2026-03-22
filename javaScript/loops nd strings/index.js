//loops
//for loop

// for(let i=1;i<=5;i++){
//     console.log("Akash");
// }

// let sum=0;
// for(i=0;i<=9;i++){
//     sum=sum+i;
// }
// console.log("Sum of n number is ", sum);

//#.2 while loop
// let i=1;
// while(i<=9){
//     console.log("Akash");
//     i++;
// }

// let sum=0;
// let i=0;
// while(i<=9){
//     sum=sum+i;
//     i++;
// }
// console.log(sum);

//#.3 Do-while loop

// let i=1;
// do{
//     i++;
//     console.log("akash");
// }while(i<=9);

// let sum=0;
// let i=0;
// do{
//     sum=sum+i;
//     i++;
// } while(i<=9);
//     console.log(sum)

//#.4 for-of loop
//it is use for arrays and strings

// let str="Akash Singh";
// for(let i of str){
//     console.log("i=",i);
// }

//#.5 For-in
//it is use for objects

// let student={
//     fullName:"akash",
//     age:24,
//     cgpa:5.48,
//     isPass:true
// };
//  for(let key in student){
//     console.log("key",key , "value", student[key]);
//  }

//Exercise-1
// for(i=0; i<=100;i++){
//     if(i%2==1){
//         console.log(i)
//     }
// }

//Exercise-2
// let gameNum=25;
// let userNum=prompt("Guess the number");
// while(userNum!=gameNum){
//     userNum=prompt("you guess wrong number: try Again ");
// }
// console.log("you guess correct number ");



//Strings
// let str="akash";
// console.log(str)
// console.log(str.length);
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// console.log(str[5]);


//template literals
//  let specialString=`this is template literals`;
//  console.log(specialString);
//  console.log(typeof specialString);

// obj={
//     item:"pen",
//     price:20
// };
// // console.log("the cost of ",obj.item ,"is",obj.price,"rupees");
// output=`the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output)


//String Methods
// let a="akash"
// let b="AKASH"
// let c= " Akash Singh "
// console.log(a.toUpperCase());
// console.log(b.toLowerCase());
// console.log(a.length);
// console.log(c.trim())
// console.log(a.trimStart())
// console.log(a.trimStart())
// console.log(c.includes("Singh"))
// console.log(a.startsWith("A"))
// console.log(a.endsWith("h"))
// console.log(a.replace("a","A"))

//Exercise-1
let fName=prompt("Enter your name without space");
let userName="@" + fName+ fName.length;
console.log(userName);