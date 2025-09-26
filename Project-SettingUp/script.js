let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];
let sbtn = document.querySelector(".start");

let started = false;
let level = 0;

let p = document.querySelector("p");
let scoreH = document.querySelector(".highest");

function star() {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
    p.innerText = "How long a sequence can you remember?"
  }
}

document.addEventListener("keypress", star);
sbtn.addEventListener("click", star);

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}

function userFlash(btn) {
  p.innerText = ""
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 200);
}

let middle =  document.querySelector('.level');


function levelUp() {
  userSeq = [];
  level++;
  middle.innerText = `${level}`;
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randbtn);
}

let high = -Infinity;
function checkAns(idx) {
  // console.log('curr level :', level);

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (high <= level) {
      high = level;
      scoreH.innerText = `Highest Score was ${high}`;
      console.log(high);
    } else {
      scoreH.innerText = `Highest Score was ${high}`;
      console.log(high);
    }
    p.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 200);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
