// Виправлений варіант))

const startBtn = document.querySelector('button[data-start]');
const stoptBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timer = null;
let isRunning = false;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function updateBtnState() {
  startBtn.disabled = isRunning;
  stoptBtn.disabled = !isRunning;
}
startBtn.addEventListener('click', startHandler);

function startHandler() {
  if (!isRunning) {
    isRunning = true;
    updateBtnState();
    timer = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
}

stoptBtn.addEventListener('click', stopHandler);

function stopHandler() {
  if (isRunning) {
    isRunning = false;
    updateBtnState();

    clearInterval(timer);
  }
}

// Початковий варіант

// const startBtn = document.querySelector('button[data-start]');
// const stoptBtn = document.querySelector('button[data-stop]');
// const body = document.querySelector('body');
// let timer = null;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// };

// startBtn.addEventListener('click', startHandler);

// function startHandler() {

//   startBtn.setAttribute.disabled = true;
//   stoptBtn.removeAttribute.disabled = true;

//    timer = setInterval(() => {
//    body.style.backgroundColor = getRandomHexColor();
//   }, 1000);
// };

// stoptBtn.addEventListener('click', stopHandler);

// function stopHandler() {
//   startBtn.removeAttribute.disabled = true;
//   stoptBtn.setAttribute.disabled = true;
//   clearInterval(timer);
// }
