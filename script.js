//----------------------------------HTML Elements-------------------------------------------
const emojis = ["🍎","🦊","🐣","🐿️","🐰","🐺","🐷","🐶","🐻‍❄️","🥟"];
let scoreDisplay = document.getElementById("score");
let targetDisplay = document.getElementById("target");
let startBtn = document.getElementById("start");
const gameContainer = document.getElementById("gameContainer");
let score = 0;
scoreDisplay.textContent = score;
let gameInterval;

function targetEmoji() {
    let randomIndex = Math.floor(Math.random()*emojis.length);
    let randomEmoji = emojis[randomIndex];
    targetDisplay.textContent = randomEmoji;
};

function showEmojis() {
    for (let i = 0; i < emojis.length; i++) {
        let randomIndex = Math.floor(Math.random()*emojis.length);
        let emoji = emojis[randomIndex];
        let button = document.createElement("button");
        button.textContent = emoji;
        gameContainer.appendChild(button);
    }
}

function startGame() {
    targetEmoji();
}

startBtn.addEventListener("click", startGame)

showEmojis();