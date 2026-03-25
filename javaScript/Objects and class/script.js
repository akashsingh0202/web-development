// class toyotaCar{
//     constructor(brand){
//         console.log("crreating new object");
//         this.brand=brand;
//     }
//  start() {
//     console.log("start")
// }
// stop() {
//     console.log("stop")
// }
// // setBrand(brand){
// //     this.brand=brand;
// // }
// }

const { use } = require("react");

// let fortuner=new toyotaCar("fortuner");
// // fortuner.setBrand("Fortuner");
// let lexus=new toyotaCar("fortuner");
// // lexus.setBrand("lexus");

//inheritance
// class person{
//     eat(){
//         console.log("Eat")
//     }
//     sleep(){
//         console.log("Sleep")
//     }
// }

// class engineer extends person{
//     work(){
//         console.log("question solving")
//     }
// }
//  let akashObj=new engineer();


//exercise -1
let DATA = "some imp data";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;

    }

    viewData(){
        console.log("Data=",DATA);
    }
}


let student1 =new User("AKASH","abc@gmail.com");
let student2 =new User("Aman","aman@gmail.com")