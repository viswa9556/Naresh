// From an array filtering out the IT employees and then increase their salary by 20% and print them.

/* let employees = [
    { name: "Arun", age: 22, salary: 20000, department: "IT" },
    { name: "Rahul", age: 25, salary: 35000, department: "HR" },
    { name: "Vijay", age: 28, salary: 45000, department: "IT" },
    { name: "Kumar", age: 24, salary: 25000, department: "Finance" },
    { name: "Ravi", age: 30, salary: 50000, department: "IT" },
    { name: "Ajay", age: 26, salary: 40000, department: "HR" },
    { name: "Suresh", age: 32, salary: 60000, department: "Finance" }
];

let filteredEmployees = employees.filter(x=>{
    return x.department === "IT"
})
    .filter(x=>{
        return x.salary > 30000
    })
    .map(x=>{
        let hike = (x.salary*20)/100
        return {name : x.name,
            age : x.age,
            department : x.department,
            ss : x.salary + hike
        }
    })
    console.log(filteredEmployees); */

  /*   from the array figuring out the students total marks
    average and then highest and lowest and at last giving grade based on the average */
 /*   let students = [
    { name: "Arun", marks: [85, 90, 78] },
    { name: "Rahul", marks: [45, 55, 60] },
    { name: "Vijay", marks: [95, 92, 88] },
    { name: "Kumar", marks: [65, 70, 72] },
    { name: "Ravi", marks: [30, 40, 35] },
    { name: "Ajay", marks: [75, 80, 85] }
];

let analyzeExam = students.map(x=>{
    let total = x.marks.reduce((sum,marks)=>{
        return sum + marks;
    },0)
    let average = total/x.marks.length

    let highest = Math.max(...x.marks);
    let lowest = Math.min(...x.marks)


    let result;
    if(average>=80){
        result = "excellent";
    }
    else if(average >= 60){
        result = "good"
    }
    else if(average >=40){
        result = "Average"
    }
    else{
        result = "poor"
    }
    return {
        name: x.name,
        total: total,
        average: average,
        highest: highest,
        lowest: lowest,
        result: result
    }

});
console.log(analyzeExam); */

function first(){
    console.log("this is main Branch");
}