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

function playRound(humanChoice, computerChoice) {

    //Human wins
    if((humanChoice == "Rock" && computerChoice == "Scissors") || 
        (humanChoice == "Paper" && computerChoice == "Rock") ||
        (humanChoice == "Scissors" && computerChoice == "Paper")
    ) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    }

    //Computer wins
    else if((computerChoice == "Rock" && humanChoice == "Scissors") || 
        (computerChoice == "Paper" && humanChoice == "Rock") ||
        (computerChoice == "Scissors" && humanChoice == "Paper")
    ) {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    }

    //Tie
    else {
        console.log("You tied! Both of you chose " + humanChoice + ".");
    }
}



function playGame() {
    for(let i = 1; i <= 5; i++) {
        console.log("\nRound " + i + " of " + "5\n");

        let humanChoice = "Invalid";

        while(humanChoice == "Invalid") {
            humanChoice = getHumanChoice();
        }

        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    console.log("\nYour score: " + humanScore);
    console.log("Computer's score: " + computerScore);

    if(humanScore > computerScore) {
        console.log("\nCongratulations! You win!");
    }

    else if(humanScore < computerScore) {
        console.log("\nSorry, you lost. Better luck next time!");
    }

    else {
        console.log("\nYou tied!");
    }
}

playGame();