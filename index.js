const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () => {
  let color = `rgb(
    ${randomIntegerFromInterval(0, 255)},
    ${randomIntegerFromInterval(0, 255)},
    ${randomIntegerFromInterval(0, 255)}
    )`;
  return color;
};

const refs = {
  body: document.body,
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener("click", onStart);
refs.stopBtn.addEventListener("click", onStop);

let id = null;

function onStart(e) {
  refs.startBtn.disabled = true;
  id = setInterval((e) => {
    refs.body.style.background = randomColor();
  }, 1000);
}

function onStop(e) {
  refs.startBtn.disabled = false;
  clearInterval(id);
}
