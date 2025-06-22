// function addButton(text){
//     let btn = document.createElement("button")
//     btn.textContent = "Click this button for " + text
//     btn.addEventListener("click", ()=>{
//         alert(text + " triggered")
//     })
//     document.body.querySelector(".q1").append(btn)
// }

// addButton("Red alert")
// addButton("Blue alert")
// addButton("Pink alert")
// addButton("Yellow alert")
// addButton("Black alert")

// function addLink(){
//     let n = prompt("Enter no of links you want to add: ")
//     n = parseInt(n)
//     console.log(n)
//     for (let i = 0; i < n; i++) {   
//         let link = prompt("Enter the link: ")
//         let name = prompt("Enter the name: ")
//         let a = document.createElement("a")
//         a.href = `${link}`
//         a.textContent = name
//         document.querySelector(".q2").append(a)
//     }
// }

// addLink()

// function fetchData(){
    // fetch("https://official-joke-api.appspot.com/random_joke")
    //     .then(response =>{
    //         if(response.ok){
    //             return response.json()
    //         }
    //     })
    //     .then(data =>{
    //         console.log(`Fetched at ${new Date().toLocaleDateString()}`)
    //         console.log(data)
    //         let setup = data.setup
    //         let punchline = data.punchline
    //         // let jokeHTML = data.map(joke=> `<strong>${joke.setup}</strong> - ${joke.punchline}`)
    //         document.querySelector(".q4").append(setup)
    //         document.querySelector(".q4").append(punchline)
    //     })
    
    // fetch("https://api.kanye.rest/")
    //     .then(response =>{
    //         if(response.ok){
    //             return response.json()
    //         }
    //     })
    //     .then(data =>{
    //         console.log(`Fetched at ${new Date().toLocaleDateString()}`)
    //         console.log(data)
    //         let quote = document.createElement("p")
    //         quote.textContent = data.quote
    //         document.querySelector(".q4").append(quote)
    //     })

//     fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
//         .then(response =>{
//             if(response.ok){
//                 return response.json()
//             }
//         })
//         .then(data =>{
//             console.log(`Fetched at ${new Date().toLocaleDateString()}`)
//             console.log(data)
//             let joke = document.createElement("p")
//             joke.textContent = data.text
//             document.querySelector(".q4").append(joke)
//         })
// }

// let id = setInterval(fetchData, 5000)

// fetchData()

// setTimeout(()=>{
//     clearInterval(id)
//     console.log("Stopped Fetching After 5 seconds")
// }, 60000)

function glowBulb(){
    let bulb = document.createElement("div")
    bulb.className = "bulb"
    bulb.addEventListener("mouseenter", ()=>{
        bulb.style.border = "25px solid yellow"
        bulb.style.filter = "blur(50px)"
    })
    bulb.addEventListener("mouseout", ()=>{
        bulb.style.border = "0px"
        bulb.style.border = "5px solid yellow"
        bulb.textContent = ""
        bulb.style.filter = "blur(0px)"
    })
    document.querySelector(".q5").append(bulb)
}

glowBulb()