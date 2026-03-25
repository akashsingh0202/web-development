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
class Admin extends User{
    constructor(name , email){
        super(name,email);

    }
    editdata (){
        DATA="some new Data";
    }
}


let student1 =new User("AKASH","abc@gmail.com");
let student2 =new User("Aman","aman@gmail.com");

let teacher1= new User ("Dean","dean@teacher.com");

let Admin= new User ("Admin","ndjasbsags@gmail.com")