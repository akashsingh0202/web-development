// let marks=[33,45,67,78,90];
// console.log(marks);
// console.log(marks.length);


// let heroes=["Ironman","batman","superman","hulku","thomas"];
// console.log(heroes);
// heroes[1]="hanuman";
// console.log(heroes);
//for loop
// for(let idx=0;idx<heroes.length;idx++){
//     console.log(heroes[idx])
// }

//for of loop
// for(let el of heroes){
//     console.log(el);
// }

// let cities=["delhi", "mumbai","kolkata","pune","bangalore","noida"];
// for(let city of cities){
//     console.log(city.toUpperCase())
// }

//exercise-1

// let num=[85,97,44,37,76,60];
// let  sum=0;
// for (let i=0;i<num.length;i++){
//     sum=sum+num[i];
// }
// let avg =sum/num.length;
// console.log(avg);

//exercise -2
// let items=[250,645,300,900,50];

// for(let i=0;i<items.length;i++){
//    let offer=items[i]/10;
//    items[i]=items[i]-offer;
// }
// console.log(items);



//Array methods
//Insertion
//Adding new elements in array
// let num=[85,97,44,37,76,60];
// console.log(num.push(9))
// console.log(num.unshift(8));
// num.splice(3,0, 32, 43 ,45,76);
// console.log(num);

//deletion/removing
// let num=[85,97,44,37,76,60];
// num.pop();
// num.shift();
// num.splice(2,3);
// console.log(num);

//combining and Slicing array
// let num1=[85,97,44,37,76,60];
// let num2=[85,97];
//combine
// let combined=num1.concat(num2);
// console.log(combined);
// let sliced = num1.slice(2,4);
// console.log(sliced);

//combining using spread operators
// let combined=[...num1,...num2];
// console.log(combined);

//Exercise
let companies=["Bloomberg","Microsoft","uber","google","IBM","Netflix"];
console.log(companies);
// companies.shift();
// console.log(companies);
// companies.splice(2,1,"ola");
// console.log(companies);
companies.push("amazon");
console.log(companies);


