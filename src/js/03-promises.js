import { Notify } from 'notiflix/build/notiflix-notify-aio';

document.body.style.backgroundColor = '#bce5da';
const form = document.querySelector('.form');
const options = {
  position: 'right-bottom',
  distance: '20px',
  borderRadius: '10px',
  opacity: 0.9,
  clickToClose: true,
  cssAnimationStyle: 'zoom',
};

form.addEventListener('click', promiseAdd);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function promiseAdd(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;
  let inputDelay = Number(delay.value);
  let inputStep = Number(step.value);
  let inputAmount = Number(amount.value);

  for (let i = 1; i <= inputAmount; i += 1) {
    inputDelay += inputStep;

    createPromise(i, inputDelay)
      .then(({ position, delay }) => {
        Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          options
        );
      })
      .catch(({ position, delay }) => {
        Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          options
        );
      });
    evt.currentTarget.reset();
  }
}
