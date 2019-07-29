const hands = document.querySelector(".hands");
const computerHand = ["rock", "paper", "scissors"];
const winnerHand = ["scissors", "rock", "paper"];


const popup = document.querySelector(".popup-container");
const crossBtn = document.querySelector(".cross-btn");
const computerIcon = document.querySelector("#computer-choice-image");
const winOrLose = document.querySelector("#win-or-lose");

const userScoreDisplay = document.querySelector("#you-score");
const compScoreDisplay = document.querySelector("#comp-score");

const restartBtn = document.querySelector("a");
const para = document.querySelector("#change-text");

let result, userScore = 0, compScore = 0, gameStart = false;

if (window.outerWidth <= 500) {
    Array.from(hands.children).forEach(hand => {
        hand.classList.remove("fa-10x");
        hand.classList.add("fa-5x");
    });
}


hands.addEventListener("click", e => {
    const rock = e.target.classList.contains("rock");
    const paper = e.target.classList.contains("paper");
    const scissors = e.target.classList.contains("scissors");

    let randomNumber = Math.floor(Math.random() * 3);

    if (rock || paper || scissors) {
        let userHand = e.target.classList[0];
        let compHand = computerHand[randomNumber];
        gameStart = true;

        if (userHand === compHand) {
            para.textContent = "It's a ";
            result = "DRAW";
        } else if (userHand === winnerHand[randomNumber]) {
            para.textContent = "You ";
            result = "LOSE"
            compScore += 1;
        } else {
            para.textContent = "You ";
            result = "WIN";
            userScore += 1
        }

        popup.style.display = "initial";

        window.addEventListener("scroll", scrollDisable);

        computerIcon.className = `fas fa-hand-${compHand} fa-5x`;
        winOrLose.textContent = result;
        userScoreDisplay.textContent = userScore;
        compScoreDisplay.textContent = compScore;
        
        scrollTo(0,0);

        if(window.outerWidth <= 500) {
            computerIcon.classList.remove("fa-5x");
            computerIcon.classList.add("fa-3x");
        }

        if (gameStart) {
            restartBtn.style.display = "initial";
        }
    }
});

crossBtn.addEventListener("click", () => {
    popup.style.display = "none";
    window.removeEventListener("scroll", scrollDisable);
});

restartBtn.addEventListener("click", () => {
    gameStart = false;
    userScore = 0;
    compScore = 0;
    userScoreDisplay.textContent = "0";
    compScoreDisplay.textContent = "0";
    restartBtn.style.display = "none";
});

function scrollDisable() {
    scrollTo(0, 0);
}
