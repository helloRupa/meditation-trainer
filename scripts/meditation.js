const button = document.querySelector('.instructions button');

updateInterface();

document.addEventListener('keypress', e => {
  e.preventDefault();
  
  if (e.which === 32) {
    button.click();
  }
});

button.addEventListener('click', () => {
  ++clickCount;
  logBreath();
  setStartTime();
  updateInterface();
});

