
// Snake Game -->  

const scoretext = document.querySelector("#scoretext");
const restart = document.querySelector("#restart");
const canvas = document.querySelector("#gameboard");
const ctx = canvas.getContext("2d");
const gamewidth= canvas.width ;
const gameheight = canvas.height ;
let unitsize = 20;
let foodx;
let foody;
let boardbackground = "yellow";
let xvelocity = unitsize;
let yvelocity = 0;
let score = 0;
let running = false;
const snakecolor = "red";
const snakebordercolor = "black";
const foodcolor = "black";
let snake = [
   
    {x:unitsize*4,y:0},
    {x:unitsize*3,y:0},
    {x:unitsize*2,y:0},
    {x:unitsize,y:0},
    {x:0,y:0}
];

window.addEventListener("keydown",changedirection);
restart.addEventListener("click",restartgame);

gamestart();
createfood();
drawfood();

function gamestart(){
running=true;
scoretext.textContent = score;
createfood();
drawfood();
nextfood();
};
function nextfood(){

    if(running){
        setTimeout(()=>
        {
            clearboard();
            drawfood();
            movesnake();
            drawsnake();
            checkgameover();
            nextfood();

        },100);
    }
    else{
        display();
    }

};
function createfood(){
    function random(min,max){
        const random = Math.round((Math.random() *(max - min )+min)/unitsize) *unitsize;
        return random;
    }
    foodx = random(0, gamewidth-unitsize);
    foody = random(0, gamewidth-unitsize);

};
function drawfood(){

    ctx.fillStyle = foodcolor;
    ctx.fillRect(foodx,foody,unitsize,unitsize);
};
function changedirection(event){

    const keypressed = event.keyCode;
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;


    const goingup =(yvelocity == -unitsize);
    const goingright =(xvelocity == unitsize);
    const goingdown =(yvelocity == unitsize);
    const goingleft =(xvelocity == -unitsize);

    switch(true){
        case(keypressed==left && !goingright):
        xvelocity=-unitsize;
        yvelocity=0; 
        break;

        case(keypressed==right && !goingleft):
        xvelocity=unitsize;
        yvelocity=0; 
        break;

        case(keypressed==up && !goingdown):
        xvelocity=0;
        yvelocity=-unitsize; 
        break;

        case(keypressed==down && !goingup):
        xvelocity=0;
        yvelocity=unitsize; 
        break;
    }



};

function clearboard(){
    ctx.fillStyle = boardbackground;
    ctx.fillRect(0,0,gameheight,gamewidth);

};
function movesnake(){
    const head = {
        x:snake[0].x + xvelocity,
        y:snake[0].y +yvelocity};

        snake.unshift(head);
        if(snake[0].x==foodx &&snake[0].y==foody  ){
            score+=1;
            scoretext.textContent = score;
            createfood();

        }

        else{
            snake.pop();
        }
};
function drawsnake(){
    ctx.fillStyle= snakecolor;
    ctx.strokeStyle = snakebordercolor;
    snake.forEach(snakepart =>{
        ctx.fillRect(snakepart.x,snakepart.y,unitsize,unitsize);
        ctx.strokeRect(snakepart.x,snakepart.y,unitsize,unitsize);
    })

};
function checkgameover(){
    switch(true){
        case (snake[0].x<0):
            running = false;
            break;
            case (snake[0].x>=gamewidth):
                running = false;
                break;
                case (snake[0].y<0):
                    running = false;
                    break;
                    case (snake[0].y>=gameheight):
                        running = false;
                        break;
    }

    for (let i = 1; i<snake.length;i+=1){
        if(snake[i].x==snake[0].x && snake[i].y == snake[0].y){
            running=false;
        }
    }

};
function display(){
    ctx.font = "50px MV Boli";
    ctx.fillStyle = "green";
    ctx.textAlign ="center";
    ctx.fillText("Game Over!",gamewidth/2,gameheight/2);
running=false;

};
function restartgame(){
    if(!running){
        score= 0;
        xvelocity= unitsize;
        yvelocity=0;
         snake = [
            {x:unitsize*4,y:0},
            {x:unitsize*3,y:0},
            {x:unitsize*2,y:0},
            {x:unitsize,y:0},
            {x:0,y:0}
        ];
        gamestart();
    }
    
};


