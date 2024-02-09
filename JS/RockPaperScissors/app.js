let userScore = 0;
let compScore = 0;
let usermsg = document.querySelector("#user-score");
let compmsg = document.querySelector("#comp-score")
let msg = document.querySelector(".msg")
const choices = document.querySelectorAll(".choice");

choices.forEach(choice =>{
    choice.addEventListener("click", () =>{
        let userchoice = choice.getAttribute("id");
        playGame(userchoice)
        usermsg.innerText = userScore;
        compmsg.innerText = compScore;
    })
});

;

let playGame = (userchoice) => {
    let compchoice = choicegen();
    let userWin;
    if (userchoice === compchoice){
        msg.style.textShadow = "2.5px 2.5px 3px rgba(255, 255, 255, 0.3)";
        msg.innerText = `Draw, Computer also chose ${compchoice}.`;
        return;
    }
    else if(userchoice === "rock"){
        userWin = (compchoice === "paper")? false:true;
    }
    else if(userchoice === "paper"){
        userWin = (compchoice === "scissors")? false:true;
    }
    else{
        userWin = (compchoice === "rock")? false:true;
    }

    if(userWin){
        msg.style.textShadow = "2.5px 2.5px 3px rgba(0, 255, 13, 0.3)";
        msg.innerText = `You win, Computer chose ${compchoice}.`;
        userScore++;
        return;
    }
    else{
        msg.style.textShadow = "2.5px 2.5px 3px rgba(255, 0, 0, 0.25)";
        msg.innerText = `You lose, Computer chose ${compchoice}.`;
        compScore++;
        return;
    }
    

}
let choicegen = () =>{
    let options = ["rock","paper","scissors"];
    let idxchoice = Math.floor((Math.random())*3);
    return options[idxchoice];
}