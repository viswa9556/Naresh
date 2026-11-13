function foreachElement(callback,x){
    for(let i = 0;i<x.length;i++){
         callback(x[i]);
    }
}

class Car{
    constructor(x,y){
        this.brand = x;
        this.color = y;
    }
    display(){
        console.log("name : " + this.brand);
    }
}

let vvv = new Car("audi","white");
vvv.display();


// Inheritance and overriding

class Employee{
    constructor(name,basicsalary){
        this.name = name;
        this.basicsalary = basicsalary;
    }
    calculatesalary(){
        console.log("salary :" + this.basicsalary);
    }
    display(){
        console.log("Name :" + this.name);
        console.log("salary :" + this.basicsalary);
    }

}

class childDevelopepr extends Employee{
    constructor(name,basicsalary,bonus){
    super(name,basicsalary);
    this.bonus = bonus;
}
   calculatesalary(){
    let total = this.basicsalary + this.bonus
        console.log("salary :" + total

        );
    }

}

let arun = new childDevelopepr("Arun",30000,3000);
arun.display();
arun.calculatesalary();

class manager extends Employee{
    constructor(name,basicsalary,allowance){
        super(name,basicsalary)
        this.allowance = allowance;
    }

    calculatesalary(){
        let DA = this.allowance;
        console.log("Allowance :" + DA);
    }
    display(){
        let og_salary = this.basicsalary - this.allowance
        console.log("Name :" + this.name);
        console.log("Actuallsalary :" + og_salary);
}
}

let nova = new manager("viswa",50000,6000);
nova.display();
nova.calculatesalary()


// promise and try catch

function placeorder(item,amount){
    return new Promise((resolve,reject) => {
        if(amount > 1000){
            resolve(`Your ${item} order has placed`)
        }
        else{
            reject(`Your ${amount} is not enough to place order for ${item}`)
            
        }
    })
}

placeorder("laptop",5000)
.then(result =>{
    console.log(result);
})
.catch(error =>{
    console.log(error);
})

.finally(()=>{
    console.log("finished");
})

placeorder("keyboard",200)
.then(result =>{
    console.log(result);
})
.catch(error =>{
    console.log(error);
})

.finally(()=>{
    console.log("finished");
})

// try catch

try{
    let b = 10;
    console.log(a)
}
catch(error){
    throw new ("a is not declated and initialized");
}


let studentName = "Arun";
let marks = 125;

try{
    if(marks > 100){
        throw new Error("marks cannot be more than 100")
    }
    else if(marks < 0){
        throw new Error("marks cannot be negative")
    }
    else{
        console.log(studentName);
        console.log(marks);
    }
}
catch(error){
    console.log (error.message);
}
finally{
    console.log("its checked");
}