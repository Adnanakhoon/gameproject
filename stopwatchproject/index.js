
// // stop watch program --->

let timer = document.querySelector("#timecontainer");
let stbtn = document.querySelector("#stbtn");
let psbtn = document.querySelector("#psbtn");
let rsbtn = document.querySelector("#rsbtn");

let starttime = 0;
let elapsedtime = 0;
let currenttime = 0;
let paused = true;
let intervalid;
let hrs = 0;
let mins = 0;
let secs = 0;

stbtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        starttime = Date.now() - elapsedtime ;
        intervalid = setInterval(updatetime, 1);
    }
});

psbtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
         
        clearInterval(intervalid);
    }

});

rsbtn.addEventListener("click", () => {
    
    clearInterval(intervalid);
    starttime = 0;
    elapsedtime = 0;
    currenttime = 0;
    paused = true;
    hrs = 0;
    mins = 0;
    secs = 0; 
    
    timer.textContent ="00 : 00 : 00";

});


function updatetime() {
    elapsedtime = Date.now() - starttime;

    secs = Math.floor((elapsedtime / 1000) % 60);
    mins = Math.floor((elapsedtime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedtime / (1000 * 60 * 60)) % 60);

    secs = zeroes(secs)
    mins = zeroes(mins)
    hrs = zeroes(hrs)


    timer.textContent = `${hrs } : ${mins} : ${ secs}`;

    
    function zeroes(try1){
             try1 = try1.toString();
           return try1.length < 2 ? "0" + try1 : try1;
}
}