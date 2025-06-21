let a = prompt("Enter number a: ")
let b = prompt("Enter number b: ")

// let sum = a + b

// console.log(`The sum of ${a} and ${b} is ${sum}`)
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Please enter a number")
}

let sum = parseInt(a) + parseInt(b)

function main(){
    try{
        console.log(`The sum of ${a} and ${b} is ${sum*x}`)
        return true
    }catch{
        console.log("X is not defined")
        return false
    }finally{
        console.log("Cleaning up variables.....")
    }
}

x=10

main()