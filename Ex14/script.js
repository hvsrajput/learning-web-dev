async function consoleLog(message){
    await randomNumber();
    let div = document.createElement("div");
    div.innerHTML = `${message}`;
    let dots = setInterval(() => {
        div.innerHTML += ".";
        if(div.innerHTML.endsWith("....")){
            div.innerHTML = `${message}`;
        }
    }, 300);
    // await dots();
    document.body.append(div);
    console.log(message)
}

async function randomNumber() {
    // console.log(random);
    return new Promise((resolve, reject)=>{
        let random = Math.ceil(1 + (Math.random()*6));
        setTimeout(() => {
            resolve();
        }, random*1000);

    });
}

async function main(){
    await consoleLog("Initializing Hacking");
    await consoleLog("Reading your Files");
    await consoleLog("Password files Detected");
    await consoleLog("Sending all passwords and personal files to server");
    await consoleLog("Cleaning up");
}

main();