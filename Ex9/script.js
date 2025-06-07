/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

// let num1 = 165;
// let op = "/";
// let num2 = 0;

let num1 = prompt("Enter a number: ");
let op = prompt("Enter a operation: ");
let num2 = prompt("Enter a number: ");

let fault = Math.random();

console.log(fault);

let operation = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if(fault <= 0.1){
    op = operation[op];
}

// let result;

// if(op == "+"){
//     result = num1+num2;
// }else if(op == "-"){
//     result = num1-num2;
// }else if(op == "*"){
//     result = num1*num2;
// }else if(op == "/"){
//     result = num2 != 0 ? num1/num2 : undefined;
// }else if(op == "**"){
//     result = num1**num2;
// }
// console.log("The result is: " +result);

let result = eval(`${num1} ${op} ${num2}`);
console.log("The result is: " +result)
alert("The result is: " +result);