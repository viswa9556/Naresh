/* const arr = new Array("novastrid","accenture","tata","cognizant");
let text = arr;
// console.log(text);
console.log(arr); 
console.log(text.toString()); 
 */

/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length);
 */
/* let employees = [
    { name: "Arun", salary: 20000 },
    { name: "Rahul", salary: 25000 },
    { name: "Vijay", salary: 30000 },
    { name: "Kumar", salary: 35000 },
    { name: "Ravi", salary: 40000 }
];


function salary(x){
       let y = new Array()
    for(let i = 0;i < x.length;i++){
    
       y.push(x[i].salary+5000)
    }
    return y;
}
let result = salay(employees);
console.log(result);
console.log(employees); */

/* const fruits = ["Banana", "Orange", "Apple"];

fruits.push ("pine");
console.log(fruits); */

/* let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];
// fruits.splice(2,2);
// console.log(fruits);
// fruits.splice(1,2);
// console.log(fruits);
// fruits.splice(2,0,"pineapple");
// console.log(fruits);
fruits.splice(3,1,"watermelon");
console.log(fruits); */

/* let students = ["Arun", "Rahul", "Vijay", "Kumar", "Ravi", "Ajay"];
/* console.log(students.slice(1,4));
console.log(students.slice(-3));
let newStudents = students.slice();
console.log(newStudents);

 */
/* 
let del = students.splice(2,2); // delte
console.log(students);

students.splice(2,0,"suresh");//insert
console.log(students);

students.splice(4,1,"prakesh");// replace
console.log(students);

students.splice(1,2,"karthick"); // delte and replace
console.log(students); */ 

// let students = ["Arun", "Rahul", "Vijay", "Kumar", "Ravi", "Ajay"];

// console.log(students.indexOf("Ravi"));
// console.log(students.lastIndexOf());

/* let employees = [
    { name: "Arun", salary: 20000, age: 22 },
    { name: "Rahul", salary: 25000, age: 25 },
    { name: "Vijay", salary: 30000, age: 28 },
    { name: "Kumar", salary: 35000, age: 30 },
    { name: "Ravi", salary: 40000, age: 32 } */
// ];
/* Easy – 2 tasks
1. map(): Get only the names of all employees.
/* 2. filter(): Get employees whose salary is greater than 25000. */


/* 
let names = employees.map(x=>{
    return x.name
});
console.log(names);

let salary = employees.filter(x=>{
    return x.salary > 25000
})
console.log(salary); */

let employees = [
    { name: "Arun", salary: 20000, age: 22 },
    { name: "Rahul", salary: 25000, age: 25 },
    { name: "Vijay", salary: 30000, age: 28 },
    { name: "Kumar", salary: 35000, age: 30 },
    { name: "Ravi", salary: 40000, age: 32 }
];

/* let personAge = employees.find(x =>{
    return x.age === 25
})

console.log(personAge);
 */
/* let salaryIncrease = employees.map(x=>{
    return x.salary + 5000;
})
console.log(salaryIncrease); */
let highestSalary = employees.reduce((highest,x) =>{
    if(highest.salary > x.salary){
        return highest
    }
    else{
        return x
    }
},employees[0]);
console.log(highestSalary);
