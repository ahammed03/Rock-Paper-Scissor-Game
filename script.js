const optionsEle = document.querySelectorAll('.controls p');
const userScoreEle = document.getElementById('userScore');
const computerScoreEle = document.getElementById('computerScore');
let userScore = 0;
let computerScore = 0;
const resultEle =document.getElementById('result');

optionsEle.forEach(element => {
    element.addEventListener('click', operation)

});
const array = ['rock', 'paper', 'scissor']
let turn = document.getElementById('info');
const controls = document.querySelector('.controls');
function operation(event) {
    turn.textContent = "Computer's Turn";
    controls.style.pointerEvents = 'none';
    let userChoice = event.target.id;
    // console.log(event.target.id);
    let randomIndex = Math.floor(Math.random() * array.length);
    let result = "";
    resultEle.textContent=result;
    setTimeout(() => {
        turn.textContent = "Your's Turn";
        controls.style.pointerEvents = 'auto';
        let computerChoice = array[randomIndex];
        // console.log(computerChoice);
        if (userChoice === computerChoice) {
            result = "Game Draw"
        } else if (
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'rock' && computerChoice === "scissor") ||
            (userChoice === 'scissor' && computerChoice === 'paper')
        ) {
            result = "You Won";

        } else {
            result = "Computer Won"
        }
        // console.log(result);
        resultEle.textContent=result;
        if(result==="You Won"){
            userScore++;
            userScoreEle.textContent=userScore.toString();
        }else if (result === 'Computer Won'){
            computerScore++;
            computerScoreEle.textContent=computerScore.toString();
        }

        
    }, 1000)


}