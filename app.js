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
    },150);
}


//Level Up The Game
function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    console.log(gameseq);
    gameFLash(randbtn);
}

function checkAns(idx){
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp(),2500);
        }
    }else{
        h2.innerHTML = `Game Over! Your Score Was <h1>${level}</h1> <br> Press Any Key To Start Again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
        },100);
        reset();
    }
}

//After 1st Flash
function btnPress(){
    let btn = this;
    userFLash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    // console.log(userseq);

    checkAns(userseq.length-1);
}

let allbtn = document.querySelectorAll('.btn');
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}