console.log(document.body.firstChild);
console.log(document.body.lastChild);

console.log(document.body.childNodes);
let arr = Array.from(document.body.childNodes);
console.log(arr);

console.log(document.body.parentElement);
console.log(document.body.parentNode);

console.log(document.body.nextSibling);
console.log(document.body.previousSibling);

console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

console.log(document.body.nextElementSibling);
console.log(document.body.previousElementSibling);

let table = document.createElement("table");
let thead = document.createElement("thead");
let headerRow = document.createElement("tr");

let header = ["Name", "Age", "Field"];

header.forEach(head=>{
    let th = document.createElement("th");
    th.textContent = head;
    headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

let data = [["Name 1", "Age 1", "Field 1"], ["Name 2", "Age 2", "Field 2"], ["Name 3", "Age 3", "Field 3"]];

let tbody = document.createElement("tbody");
data.forEach(rowdata=>{
    let row = document.createElement("tr");
    rowdata.forEach(name=>{
        let td = document.createElement("td");
        td.textContent = name;
        row.append(td);
    });
    tbody.append(row);
});

table.append(tbody);

document.body.append(table);

document.getElementById("cont-3");
console.log(document.getElementById("cont-3"));

console.log(document.querySelectorAll(".cont-4"));
console.log(document.querySelector(".cont-4"));
console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByClassName("cont-2"));
console.log(document.getElementsByName("hello"));
