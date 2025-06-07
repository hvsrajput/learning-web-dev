/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

let adj1 = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
};
let shop1 = {
    1: "Engine",
    2: "Food",
    3: "Garment"
};
let another1 = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
};

let random1 = Math.floor(((Math.random()*100)%3)+1);
let random2 = Math.floor(((Math.random()*100)%3)+1);
let random3 = Math.floor(((Math.random()*100)%3)+1);

let adj = adj1[random1];
let shop = shop1[random2];
let another = another1[random3];

// console.log(adj, shop, another);
let name = adj.concat(shop, another);
console.log("The Business Name is: " +name);