updateInterface();

const button = document.querySelector('.instructions button');

document.addEventListener('keydown', e => {
  if (e.which === 32) {
    e.preventDefault();
    button.click();
  }
});

button.addEventListener('click', () => {
  clickCount++;
  updateInterface();
});
