// Gets computer choice (rock, paper, or scissors)
function getComputerChoice() {
    //Random number between 0 and 2
    let num = Math.floor(Math.random() * 3)

    switch(num) {
        case 0:
            return "Rock";

        case 1:
            return "Paper";

        case 2:
            return "Scissors";
    }  
}

//Gets human choice via input
function getHumanChoice() {
    let ans = prompt("Choose: rock (r), paper (p) or scissors (s): ");

    switch(ans.toLowerCase()) {
        case "r" || "rock":
            return "Rock";

        case "p" || "paper":
            return "Paper";

        case "s" || "scissors":
            return "Scissors";

        default:
            return "Invalid";
    }
}

let humanScore = 0;
let computerScore = 0;

const txtHumanChoice = document.querySelectorAll(".choice")[0];
const txtComputerChoice = document.querySelectorAll(".choice")[1];

const txtHumanScore = document.querySelector("#human-score");
const txtComputerScore = document.querySelector("#computer-score");

const txtRound = document.querySelectorAll(".round-num")[0];

function playRound(humanChoice, computerChoice) {

    if(humanScore >= 5 || computerScore >= 5)
        return;

    txtHumanChoice.textContent = humanChoice;
    txtComputerChoice.textContent = computerChoice;

    //Human wins
    if((humanChoice == "Rock" && computerChoice == "Scissors") || 
        (humanChoice == "Paper" && computerChoice == "Rock") ||
        (humanChoice == "Scissors" && computerChoice == "Paper")
    ) {
        humanScore++;
        alert("You win! " + humanChoice + " beats " + computerChoice + ".");
    }

    //Computer wins
    else if((computerChoice == "Rock" && humanChoice == "Scissors") || 
        (computerChoice == "Paper" && humanChoice == "Rock") ||
        (computerChoice == "Scissors" && humanChoice == "Paper")
    ) {
        computerScore++;
        alert("You lose! " + computerChoice + " beats " + humanChoice + ".");
    }

    //Tie
    else {
        alert("You tied! Both of you chose " + humanChoice + ".");
    }
}


const btns = document.querySelectorAll(".btn");

//Add click listener to each button
btns.forEach((button) => {

    button.addEventListener("click", function () {
        playRound(button.textContent, getComputerChoice());

        txtHumanScore.textContent = "Your score: " + humanScore;
        txtComputerScore.textContent = "Bot's score: " + computerScore;

        //End game once either player reaches 5 points
        if(humanScore == 5 || computerScore == 5) {
            if(humanScore > computerScore) {
                alert("\nCongratulations! You win!");
            }
        
            else if(humanScore < computerScore) {
                alert("\nSorry, you lost. Better luck next time!");
            }
        
            else {
                alert("\nYou tied!");
            }
        }
    });
        
})