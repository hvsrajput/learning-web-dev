let box = document.createElement("div");
box.className = "box";
box.textContent = "Hover Animation";

box.addEventListener("mouseenter", ()=>{
    box.style.backgroundColor = "pink";
    box.style.borderRadius = "300px";
    box.textContent = "Hello, I am being hovered and I am a circle";
});

box.addEventListener("mouseout", ()=>{
    box.style.backgroundColor = "bisque";
    box.style.borderRadius = "0px";
    box.textContent = "Hover Animation";
});

document.body.append(box);

let btn = document.createElement("button");
btn.className = "btn";
btn.textContent = "Click Animation";

let btn2 = document.createElement("button");
btn2.className = "btn";
btn2.textContent = "Click This to reset 1st button";

btn.addEventListener("click", ()=>{
    btn.style.backgroundColor = "lightblue";
    btn.textContent = "I was clicked";
});

btn2.addEventListener("click", ()=>{
    btn.style.backgroundColor = "#efefef";
    btn.style.border = "1px solid";
    btn.style.borderRadius = "3px";
    btn.textContent = "Click Animation";
});

document.body.append(btn);
document.body.append(btn2);