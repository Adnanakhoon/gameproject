
// Tic Tac Toe -->>


const cells = document.querySelectorAll(".cell");
const restartbtn = document.querySelector("#restart");
const statusText = document.querySelector(".status");

const wincondition =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let options = ["","","","","","","","",""];
let currentplayer = "X";
let running = false;

intialize();

function intialize(){
     running= true
    cells.forEach(cell => cell.addEventListener("click",cellclick));
    restartbtn.addEventListener("click",restartagain);
    statusText.textContent =`${currentplayer}'s turn`;
}
function cellclick(){
    const cellindex = this.getAttribute("cellIndex");

    if (options[cellindex] != "" || !running){
        return;

    }
    updatecell(this,cellindex)
    checkwinner();



}
function updatecell(cell,index){
    options[index]=currentplayer;
    cell.textContent = currentplayer;

}
function changeplayer(){
    currentplayer = (currentplayer=="X") ? "0" : "X";
    statusText.textContent =`${currentplayer}'s turn`;

}
function checkwinner(){

    let roundwon = false;

    for(let i =0;i<wincondition.length;i++){
        const condition = wincondition[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA==""||cellB =="" || cellC ==""){
            continue;
        }

        if (cellA ==cellB && cellB== cellC){
            roundwon= true;
            break;
        }
    }

    if(roundwon){
        statusText.textContent= `${currentplayer} wins!`;
        running=false;

    }
else if(!options.includes("")){
    statusText.textContent="Draw";
    running= false;

}
else{
    changeplayer();
}

}
function restartagain(){
     options = ["","","","","","","","",""];
     currentplayer = "X";
    statusText.textContent =`${currentplayer}'s turn`;
    cells.forEach(cell =>cell.textContent="");
    running= true;
    


}


