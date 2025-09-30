let userscore = 0;
let compscore = 0;

const choices=document.querySelectorAll(".choice");
const result=document.querySelector("#result");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=() =>{
    const options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
}

const showWinner=(userWin) =>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        console.log("you wins!");
        result.innerText=`You Win!`;
        result.style.backgroundColor="green";
    }else{
        compscore++;
        compScorePara.innerText=compscore;
        console.log("you lose!");
        result.innerText=`You Lose!`;
        result.style.backgroundColor="red";
    }
};

const playGame= (userChoice) => {
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        console.log("It's a tie!");
    }else{
        let userWin=true;
        if(userChoice == "rock"){
            userWin= compChoice =="paper"? false:true;
        }else if(userChoice == "paper"){
            userWin=compChoice=="scissors"? false:true;
        } else{
            userWin=compChoice=="rock"? false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });
});