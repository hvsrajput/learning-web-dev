function func1(text, func2){
    let div = document.createElement("div")
    div.textContent = `${text}`
    document.body.append(div)
    func2()
}

func1("Func1 Triggered", ()=>{
    alert("func2 triggered")
})

let promise = new Promise((resolve, reject)=>{
    resolve(alert("Resolved"))
    reject(alert("Rejected"))
})