console.log("Hello this is loops");
let a=1;
for (let i = 0; i < 100; i++) {
    console.log(a+i);
}
let obj1 = {
    name: "hvs",
    branch: "Computer science",
    semester: 4
}
for (const key in obj1) {
    const element = obj1[key];
    console.log(key, element);
}
for (const i of "Harshvardhan Singh") {
    console.log(i);
}

while(a<10){
    console.log(a);
    a++;
}
console.log(a);
do{
    console.log(a);
    a++;
}while(a<20);
console.log(a);