//thoda sa bhadda dikh raha hai but will modify the styling, abhi tempelate banaya h
//only used js par html aur css use kar sakte hain code easy banega

function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let temp;
    if(views > 1000000){
        temp = views/1000000;
        e = temp+"M";
    }else if(views>1000){
        temp = views/1000;
        e = temp+"K";
    }

    let container = document.createElement("div");
    container.style.backgroundColor = "#f0f0f0";
    container.style.padding = "15px";
    container.style.margin = "15px";
    container.style.width = "60%";
    container.style.borderRadius = "5px";
    container.style.display = "flex";
    container.style.gap = "25px";
    container.style.alignItems = "center";
    // container.style.justifyContent = "space-between";

    let cardImage = document.createElement("div");
    // cardImage.className = "cont-card";
    // cardImage.style.backgroundColor = "red";
    cardImage.style.backgroundImage = `url(${thumbnail})`;
    cardImage.style.backgroundSize = "cover";
    cardImage.style.height = "108px";
    cardImage.style.width = "192px";
    cardImage.style.borderRadius = "5px";
    cardImage.style.position = "relative";

    let durationCard = document.createElement("div");
    durationCard.innerHTML = `${duration}`;
    durationCard.style.backgroundColor = "#f0f0f0";
    // durationCard.style.color = "white";
    durationCard.style.padding = "2px";
    durationCard.style.margin = "3px";
    durationCard.style.borderRadius = "2px";
    durationCard.style.display = "flex";
    durationCard.style.width = "fit-content";
    durationCard.style.position = "absolute";
    durationCard.style.bottom = "0px";
    durationCard.style.right = "0px";

    cardImage.append(durationCard);
    
    let rightText = document.createElement("div");
    let cardHeading = document.createElement("h2");
    cardHeading.innerHTML = `${title}`;
    rightText.append(cardHeading);

    let otherInfo = document.createElement("div");
    otherInfo.style.display = "flex";
    otherInfo.style.alignItems = "center";
    otherInfo.style.gap = "10px";
    
    let channelName = document.createElement("p");
    channelName.innerHTML = `${cName}`;
    otherInfo.append(channelName);

    let bar1 = document.createElement("p");
    bar1.innerHTML = "|";
    otherInfo.append(bar1);
    
    let noOfViews = document.createElement("p");
    noOfViews.innerHTML = `${e}`;
    otherInfo.append(noOfViews);

    let bar2 = document.createElement("p");
    bar2.innerHTML = "|";
    otherInfo.append(bar2);
    
    let months = document.createElement("p");
    months.innerHTML = `${monthsOld}` + " months old";
    otherInfo.append(months);

    rightText.append(otherInfo);

    container.append(cardImage);
    container.append(rightText);
    mainContainer.append(container);
}

// let container = document.getElementsByClassName("container")[0];
let mainContainer = document.querySelector(".container");
createCard("Introduction to frontend | CWH", "Code With Harry", 8680000, 2, "31:22", "thumbnail.jpg");
createCard("Introduction to backend | CWH", "Code With Harry", 727000, 2, "31:22", "thumbnail.jpg");