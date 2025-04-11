let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userNum = document.querySelector("#user-score");
const compNum = document.querySelector("#comp-score");
const reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
    console.log("Game was reset");
    userScore = 0;
    compScore = 0;
    userNum.innerText = userScore;
    compNum.innerText = compScore;
    msg.innerText = "The game was reset";
    msg.style.backgroundColor = "#081b31";
});


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranVal = Math.floor(Math.random()*3);

    return options[ranVal];
}

const drawGame = () => {

    userScore++;
    userNum.innerText = userScore;
    compScore++;
    compNum.innerText = compScore;


    msg.innerText = "The game was draw";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userChoice, compChoice, userWin) => {

    if(userWin){
        userScore++;
        userNum.innerText = userScore;
        msg.innerText = "You won ";
        msg.style.backgroundColor = "green";
    }

    else{
        compScore++;
        compNum.innerText = compScore;
        msg.innerText = "Comp won ";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    
    let compChoice = genCompChoice();

    if(compChoice == userChoice){
        drawGame();
    }

    else{

        let userWin = true;

        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userChoice, compChoice, userWin);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
