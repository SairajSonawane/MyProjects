const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const pcDisplay = document.getElementById("pcDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
    const pcChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === pcChoice) {
        result = "ITS A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (pcChoice === "scissor") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (pcChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissors":
                result = (pcChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    pcDisplay.textContent = `PC: ${pcChoice}`;
    resultDisplay.textContent = result;

    switch (result) {
        case "YOU WIN":
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE":
            resultDisplay.classList.add("redText");
            break;
        default:
            // Remove any existing classes if it's a tie
            resultDisplay.classList.remove("greenText", "redText");
            break;
    }
}
