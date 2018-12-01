// GLOBAL CONSTANTS
const SPINNER_TIMEOUT = 4000;

// =============== first page here ======== //
const contentWrapper = document.querySelector('.content');
const spinnerWrapper = document.querySelector('.spinner');
const submitButton = document.querySelector('button');

submitButton.addEventListener('click', () => {
  [contentWrapper, spinnerWrapper].forEach((el) => el.classList.toggle('hidden'));
  setTimeout(() => {
    window.location.pathname = 'results';
  }, SPINNER_TIMEOUT);
});
