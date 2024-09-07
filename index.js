
const inputBar = document.getElementById("inputBar");
const submitBtn = document.getElementById("submitBtn");
const resultText = document.getElementById("resultText");

const tags = ["dont mess with me", "wolf", "rich", "tall","attractive", "do not touch tail", "cool", "single"];

submitBtn.addEventListener('click', function() {
    resultText.textContent = RPText(inputBar.value);
})

function RPText(str) {
    let tagsArray = tags
    let returnSTR = `${str}`;
    for(let i = 0; i < 5; i++) {
        const tag = tagsArray[Math.floor(Math.random() * tagsArray.length)];
        returnSTR += `/${tag}`;
        tagsArray = tagsArray.filter(item => item !== tag)
    }
    return returnSTR;
}