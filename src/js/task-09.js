const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgColorSpan = document.querySelector('.color');
bgColorSpan.textContent = getRandomHexColor();

const button = document.querySelector('.change-color');
const body = document.querySelector('body');

button.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  body.style.background = newColor;
  bgColorSpan.textContent = newColor;
});