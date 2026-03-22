//operators
//#1 Arithmetic Operator
//+
// let a=12;
// let b=13;
// console.log("a=", a, "b=",b)
// console.log("a+b=", a+b)
// console.log("a-b=", a-b)
// console.log("a*b=", a*b)
// console.log("a/b=", a/b)
// console.log("a%b=", a+b)
// console.log("a ** b=", a**b)
// console.log("a+b=", a+b)

//inc/dec
// a++;
// console.log(a)
// a--;
// console.log(a)
// ++a;
// console.log(a)
// --a;
// console.log(a)
// console.log(++a)
// console.log(a++)
// console.log(a--)
// console.log(--a)


//#.2Assignment operator

// let a=12;
// let b=13;
// console.log("a=", a, "b=",b)
// console.log(a+=4);
// console.log(a-=4);
// console.log(a*=4);
// console.log(a/=4);
// console.log(a%=4);


//#.3Comparison operator

// let a=12;
// let b=13;
// console.log("a=", a, "b=",b);
// console.log("a==b", a==b);
// console.log("a!=b",a!=b);
// console.log("a===b", a===b);
// console.log("a!==b", a!==b);
// console.log("a>=b", a>=b);
// console.log("a<=b", a<=b);
// console.log("a<b", a<b);
// console.log("a>b", a>b);


// #.4 Logical operator

// let a=6 ;
// let b=5;
// condition1=a>=b;
// condition2=a===6;
// console.log("a&&b", condition1 &&condition2);
// condition3=a<b;
// condition4=a==6;
// console.log("a||b", condition1 ||condition2);
// console.log("a>b", !condition1);

//#.5 Ternary operator

// let a=16;
// let condition=a>=18?"adult":"non-adult"
// console.log(condition)




//conditional Statement 

// #1. if statement

// let mode="light";
// let color;
// if(mode==="dark")
// {
//     color="black"
// }
// if(mode==="light"){
//     color="white"
// }
// console.log(color)

// #2.if else
// let a=19;
// if(a>=18){
//     console.log("you can vote");
// }
// else{
//     console.log("you cannot vote");
// }
// let a=3;
// if(a%2==0){
//     console.log("even no.",a)
// }
// else{
//     console.log("odd no.",a)
// }

// #.3 if-elseif-else
// let a=3;
// if(a==1){
//     console.log("1st year");
// }
// else if(a==2){
//     console.log("2nd year");
// }
// else{
//     console.log("3rd year");
// }


//exercise
// let a=prompt("Enter a number");
// if(a%5==0){
//     console.log("no. is divisible by 5");
// }
// else{
//     console.log("no. is not divisible  by 5")
// }

let grade=80;
if(grade>=90&&grade<=100){
    console.log("A");
}
else if(grade>=70&&grade<=89){
    console.log("B");
}
else if(grade>=60&&grade<=69){
    console.log("C");
}
else if(grade>=50&&grade<=59){
    console.log("D");
}
else if(grade>=0&&grade<=49){
    console.log("F")
}
else{
    console.log("please enter valid percentage");
}