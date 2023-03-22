let adviceNumber = document.getElementById("advice-number");
let adviceText = document.querySelector(".content p q");
let generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", async _ => {
    await fetch("https://api.adviceslip.com/advice")
    .then(response => {return response.json()})
    .then(slip => {return slip.slip})
    .then(adviceData => {
        adviceNumber.textContent = adviceData.id;
        adviceText.textContent = adviceData.advice;
    })
})