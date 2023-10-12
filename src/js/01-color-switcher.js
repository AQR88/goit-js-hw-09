const startBtn = document.querySelector('button[data-start]');
const stoptBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtn.addEventListener('click', startHandler);

function startHandler() {
  startBtn.setAttribute.disabled = true;
  stoptBtn.removeAttribute.disabled = true;
  timer = setInterval(() => {
    const colorChange = body.style.backgroundColor;
    colorChange = getRandomHexColor();
  }, 1000);
}

stoptBtn.addEventListener('click', stopHandler);

function stopHandler() {
  startBtn.removeAttribute.disabled = true;
  stoptBtn.setAttribute.disabled = true;
  clearInterval(timer);
}
