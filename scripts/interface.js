const maxClicks = content.length;
let clickCount = 0;
const breathLog = [];
let startTime = null;

function scaleClickCount() {
  return clickCount % maxClicks;
}

function setStartTime() {
  if (scaleClickCount() === 1) {
    startTime = Date.now();
  }
}

function addBreath() {
  setStartTime();

  if (startTime && scaleClickCount() === 0) {
    breathLog.push(calculateBreath(startTime));
    updateBreathLog();
  }
}

function updateBreathLog() {
  const breathLogUL = document.querySelector('.breath-log ul');

  breathLogUL.textContent = '';

  breathLog.forEach(breath => {
    const li = document.createElement('li');

    li.textContent = `${breath} seconds`;
    breathLogUL.appendChild(li);
  });
}

function updateButtonText() {
  const button = document.querySelector('.instructions button');

  button.textContent = content[scaleClickCount()].button;
}

function updateInstructions() {
  const instructions = document.querySelector('.instructions p');
  const allInstructions = content[scaleClickCount()].instructions;
  const randomIndex = getRandomInt(allInstructions.length);

  instructions.textContent = allInstructions[randomIndex];
}

function updateMean() {
  const mean = document.querySelector('#mean');

  mean.textContent = `${meanBreath(breathLog)} seconds`;
}

function updateLongest() {
  const longest = document.querySelector('#longest');

  longest.textContent = `${longestBreath(breathLog)} seconds`;
}

function updateShortest() {
  const shortest = document.querySelector('#shortest');

  shortest.textContent = `${shortestBreath(breathLog)} seconds`;
}

function updateStats() {
  if (breathLog.length > 0) {
    updateMean();
    updateLongest();
    updateShortest();
  }
}

function updateInterface() {
  updateButtonText();
  updateInstructions();
  addBreath();
  updateStats();
}