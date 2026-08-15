const priceSection = document.querySelector('#oferta');

document.querySelectorAll('a.button').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    priceSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

let totalSeconds = 10 * 60;
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const updateCountdown = () => {
  if (!minutes || !seconds) return;
  minutes.textContent = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  seconds.textContent = String(totalSeconds % 60).padStart(2, '0');
  if (totalSeconds > 0) totalSeconds -= 1;
};

updateCountdown();
setInterval(updateCountdown, 1000);
