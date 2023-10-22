// Виправлений варіант

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

require('flatpickr/dist/themes/dark.css');

document.body.style.backgroundColor = '#bce5aa';

const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('button[data-start]');
let selectedDate = null;
let intervalId = null;
let currentDate = null;
buttonEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {

    if (selectedDates < Date.now()) {
      Report.failure(
        'Please choose a date in the future',
        '"Failure is simply the opportunity to begin again, this time more intelligently."',
        'Okay'
      );
       buttonEl.disabled = true;

    } else {  
      Report.success(
        'Success',
        '"Knowledge rests not upon truth alone, but upon error also."',
        'Ok'
      );
      buttonEl.disabled = false;
    };
  },
};

const startTimer = () =>{
  selectedDate = new Date(inputEl.value);
  timer.start();
};

buttonEl.addEventListener('click', startTimer);

const timer = {
  timerSelector: document.querySelector('.timer'),
  start() {
    intervalId = setInterval(() => {
      buttonEl.disabled = true;
      inputEl.disabled = true;
      currentDate = Date.now();
      const diff = selectedDate - currentDate;

      if (diff <= 0) {
        this.stop();
        return;
      }
      this.updateTimer(diff);
    }, 1000);
  },
  updateTimer(diff) {
    const { days, hours, minutes, seconds } = this.convertMs(diff);
    this.timerSelector.querySelector('[data-days]').textContent = this.addLeadingZero(days);
    this.timerSelector.querySelector('[data-hours]').textContent = this.addLeadingZero(hours);
    this.timerSelector.querySelector('[data-minutes]').textContent = this.addLeadingZero(minutes);
    this.timerSelector.querySelector('[data-seconds]').textContent = this.addLeadingZero(seconds);
  },

  stop() {
    clearInterval(intervalId);
    this.intervalId = null;
    buttonEl.disabled = true;
    inputEl.disabled = false;
  },


 convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days =  (Math.floor(ms / day));
  // Remaining hours
  const hours =  (Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = (Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
},
addLeadingZero(value) {
  return String(value).padStart(2, 0);
},
};

const fp = flatpickr(inputEl, options);



// Початковий варіант

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { Report } from 'notiflix/build/notiflix-report-aio';

// require('flatpickr/dist/themes/dark.css');

// document.body.style.backgroundColor = '#bce5da';

// const inputEl = document.querySelector('#datetime-picker');
// const buttonEl = document.querySelector('button[data-start]');
// let selectedDate = null;
// let intervalId = null;
// let currentDate = null;
// buttonEl.disabled = true;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0].getTime() < Date.now()) {
//       Report.failure(
//         'Please choose a date in the future',
//         '"Failure is simply the opportunity to begin again, this time more intelligently."',
//         'Okay'
//       );
//     } else {
//       Report.success(
//         'Success',
//         '"Knowledge rests not upon truth alone, but upon error also."',
//         'Ok'
//       );
//       buttonEl.disabled = false;
//       const startTimer = () =>{
//         selectedDate = selectedDates[0].getTime();
//         timer.start();
//       };
//       buttonEl.addEventListener('click', startTimer);
//     };
//   },
// };


// const timer = {
//   timerSelector: document.querySelector('.timer'),
//   start() {
//     intervalId = setInterval(() => {
//       buttonEl.disabled = true;
//       inputEl.disabled = true;
//       currentDate = Date.now();
//       const diff = selectedDate - currentDate;

//       if (diff <= 0) {
//         this.stop();
//         return;
//       }
//       const { days, hours, minutes, seconds } = this.convertMs(diff);
//       this.timerSelector.querySelector('[data-days]').textContent =
//         this.addLeadingZero(days);
//       this.timerSelector.querySelector('[data-hours]').textContent =
//         this.addLeadingZero(hours);
//       this.timerSelector.querySelector('[data-minutes]').textContent =
//         this.addLeadingZero(minutes);
//       this.timerSelector.querySelector('[data-seconds]').textContent =
//         this.addLeadingZero(seconds);
//     }, 1000);
//   },

//   stop() {
//     clearInterval(intervalId);
//     this.intervalId = null;
//     buttonEl.disabled = true;
//     inputEl.disabled = false;
//   },


//  convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days =  this.addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours =  this.addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// },
// addLeadingZero(value) {
//   return String(value).padStart(2, 0);
// },
// };

// const fp = flatpickr(inputEl, options);
