// document.querySelector(".faq-answer").style.display = "none";

// document.querySelector(".faq-question").addEventListener("click", ()=>{
    //     document.querySelector(".plus").style.rotate = "45deg";
    //     document.querySelector(".faq-answer").style.display = document.querySelector(".faq-answer").style.display === "none" ? "block":"none";
    // });
    
document.querySelectorAll(".faq").forEach(container=>{
    let answer = container.querySelector(".faq-answer");
    let plus = container.querySelector(".plus");
    answer.style.display = "none";
    container.querySelector(".faq-question").addEventListener("click", ()=>{
        let isVisible = answer.style.display === "none";
        plus.style.transform = isVisible ? "rotate(45deg)" : "rotate(0deg)";
        answer.style.display = isVisible ? "block" : "none";
    })
});