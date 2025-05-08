let gameseq = [];
let userseq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

//Start The Game
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game Is Started");
        started = true;

        levelUp();
    }
})

//Flash The Button
function gameFLash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFLash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}


//Level Up The Game
function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);

    gameFLash(randbtn);
}

//After 1st Flash
function btnPress(){
    let btn = this;
    userFLash(btn);
}

let allbtn = document.querySelectorAll('.btn');
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}