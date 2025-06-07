function randomTareef(name){
    console.log("Hey "+name+", you look good");
    console.log("Hey "+name+", your hair look awesome");
    console.log("Hey "+name+", your outfit is dope");
    console.log("Hey "+name+", your girfriend is sexy");
}

randomTareef("Thala");

function sumOfTwoNum(a, b){
    return a+b;
}

function WrongsumOfTwoNum(a, b, c=7){
    return a+b+c;
}

let a=5;
let b=64;
console.log("The sum of "+a+" and "+b+" is: " +sumOfTwoNum(a)); //gives NaN as argument dhang se paas nhi kiya
console.log("The sum of "+a+" and "+b+" is: " +sumOfTwoNum(a, b));
console.log("The correct sum of "+a+" and "+b+" is: " +WrongsumOfTwoNum(a, b));

//Arrow Function

let ArrowFunc1 = ()=>{
    console.log("This arrow function prints: nothing");
}
let ArrowFunc2 = (x)=>{
    console.log("This arrow function prints: " +x);
}

ArrowFunc1();
ArrowFunc2(69);