// let a = document.body.children[0];
// a.style.backgroundColor = "pink";
// a.style.color = "white";
// let b = a.children;
// b[0].style.backgroundColor = "red";
// b[1].style.backgroundColor = "green";
// b[2].style.backgroundColor = "blue";
// b[3].style.backgroundColor = "black";
// b[4].style.backgroundColor = "purple";

// let boxes = document.querySelector(".container").children;
let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// boxes = Array.from(boxes)
// console.log(boxes);
let randomColor = ()=>{
    let red = Math.ceil(255*Math.random());
    let blue = Math.ceil(255*Math.random());
    let green = Math.ceil(255*Math.random());
    return `rgb(${red}, ${green}, ${blue})`;
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = randomColor();
    e.style.color = randomColor();
})