
// Rock Paper Scissor -->

const playertext = document.querySelector("#player");
  const resulttext = document.querySelector("#result");
 const computertext = document.querySelector("#computer");
  const btn = document.querySelectorAll(".btn");

let player;
let computer;
let result;

btn.forEach(button=> button.addEventListener("click",()=>{
    player = button.textContent;
    computerturn();
    playertext.textContent = `Player : ${player}`;
    computertext.textContent = `Computer : ${computer}`;
    resulttext.textContent = checkwinner();


}));

function computerturn(){
    const random = Math.floor(Math.random()*3) + 1 ;
    switch(random){
        case 1:
            computer = "Rock";
            break;
            case 2:
            computer = "Paper";
            break;
            case 3:
            computer = "Scissor";
            break;
    }
}

function checkwinner(){

    if (player == computer){
        return " Result : Draw";

    }
    else if(computer == "Rock"){
        return (player =="Paper") ? " Result : You Win~~" :" Result : You Lose!";
        
    }
    else if(computer == "Paper"){
        return (player =="Scissor") ? " Result : You Win~~" :" Result : You Lose!";
    }
    else if(computer == "Scissor"){
        return (player =="Rock") ? " Result : You Win~~" :" Result : You Lose!";
        
    }
}


