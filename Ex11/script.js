/*
    Write a program to calculate factorial of a number using reduce and using for loops

    6! = 6*5*4*3*2*1
*/

let a = prompt("Enter number to find factorial: ");

let fact_for = 1;
for (let i = 1; i <= a; i++) {
    fact_for *= i;
}

let arr = [];
for (let i = 1; i <= a; i++) {
    arr[i] = i;
}

let fact_reduce = arr.reduce((a,b)=>{return a*b});

console.log("The factorial using for loop is: " +fact_for);
console.log("The factorial using reduce is: " +fact_reduce);

a = parseFloat(a);

function factorial(){
    // create array from 0 to (a+1)-1
    let arr2 = Array.from(Array(a+1).keys());
    // console.log(arr2.slice(1));
    let result = arr2.slice(1).reduce((a,b)=>{return a*b});
    console.log("The factorial via new arrray method and then reduce is: " +result);
}

factorial();