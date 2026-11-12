
// function scope
/* function display(){
    let name = "viswa";
    var age = 24;
    console.log(name);
    console.log(age);
}
display(); */

// global scope

/* let names;
 names = "viswa"

function gs(x){
    if(x == "viswa"){
        console.log("its original name");
    }
}

gs(names);
console.log(names);
 */

// block scope
/* 
if (true) {
    let salary = 30000;
    console.log(salary); */
// }

// console.log(salary); its not accessed

// here hoisted but let and const cannot 
/* a = 50;
console.log(a);
var a;   */

// function hoisting

/* console.log(view("showww"));

function view(x){
    return(x + " notshow");
} */

    // without strict

 /*    function add(a,b){
        return a+b;
    }
console.log(add(6,1)); */

// with strict
/* 

function sub(x,y){
    return x-y;
}
console.log(sub(30,20)); */


// erroe strict
/* "use strict";
a = 10;
console.log(a); */

// call back function 

/* function multiply(callback,x,y){
    let M = x*y
    return callback(M);
}

function display(x){
    console.log(x);
}

multiply(display,5,4); */

/* function square(callback,a){
    let squared = a*a;
    return callback(squared)
}

function display(x){
    console.log(x);  
}

square(display,6); */

// callback function for laptop placement and confirmation

function placeorder(callback,x){
    console.log(`order placed successfully for ${x}`)
    callback(x)
}

function secondconfirmation(x){
    console.log(`confimation sent for the ${x}`);
}

placeorder(secondconfirmation,"laptop");