//----------------------------------HTML Elements-------------------------------------------
const emojis = ["🦊","🐶","🐣","🐿️","🥟","🐰","🐷","🐺","🍎","🐻‍❄️"];
let scoreDisplay = document.getElementById("score");
let targetDisplay = document.getElementById("target");
let startBtn = document.getElementById("start");
const gameContainer = document.getElementById("gameContainer");
let score = 0;
scoreDisplay.textContent = score;
let gameInterval;

//-------------------------------Target----------------------------------------------------

function targetEmoji() {
    clearInterval(gameInterval);
    let randomIndex = Math.floor(Math.random()*emojis.length);
    let randomEmoji = emojis[randomIndex];
    targetDisplay.textContent = randomEmoji;
    gameInterval = setInterval(showEmojis, 300);
};
 //------------------------------Show Emojis on Screen---------------------------------
function showEmojis() {
    //for (let i = 0; i < emojis.length; i++) {
        const emoji = emojis[Math.floor(Math.random()*emojis.length)];
        //let emoji = emojis[randomIndex];
        const button = document.createElement("button");
        button.textContent = emoji;
        button.className = emoji;
        button.style.position = "absolute";
        button.style.left = Math.random() * 90 + "%";
        button.style.top = Math.random() * 90 + "%";
        button.style.transform = "translate(-50%, -50%)";
        button.style.fontSize = "30px";

        button.addEventListener("click", () => {
            if (emoji === targetDisplay.textContent) {
                score++;
                scoreDisplay.textContent = score;
            } else {
                endGame();
            }
            button.remove();
        });
        gameContainer.appendChild(button);
        setTimeout(()=>button.remove(), 1000)
        }
//}

function startGame() {
    clearInterval(gameInterval);
    score = 0;
    scoreDisplay.textContent = score;
    gameContainer.innerHTML = "";
    targetEmoji();
}

function endGame() {
    clearInterval(gameInterval);
    gameContainer.innerHTML = "YOU LOSE!";
}

startBtn.addEventListener("click", startGame)
showEmojis();