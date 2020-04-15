const breathLog = [];
let clickCount = 0;
let startTime = null;

function clickCountToIndex() {
  return clickCount % 3;
}

function updateButtonText() {
  const button = document.querySelector('.instructions button');

  button.textContent = content[clickCountToIndex()].button;
}

function randomInstruction() {
  const options = content[clickCountToIndex()].instructions;

  return options[getRandomInt(options.length)];
}

function updateInstructions() {
  const instructions = document.querySelector('.instructions p');

  instructions.textContent = randomInstruction();
}

function setStartTime() {
  if (clickCountToIndex() === 1) {
    startTime = Date.now();
  }
}

function logBreath() {
  if (clickCountToIndex() === 0) {
    breathLog.push(calculateBreathSeconds(startTime));
  }
}

function updateBreathLog() {
  const breathTable = document.querySelector('.breath-log ul');

  breathTable.textContent = '';
  breathLog.forEach(breath => {
    const li = document.createElement('li');
    li.textContent = `${breath} seconds`;
    breathTable.appendChild(li);
  });
}

function updateMean() {
  const meanSpan = document.querySelector('#mean');

  meanSpan.textContent = calculateMean(breathLog);
}

function updateShortest() {
  const shortestSpan = document.querySelector('#shortest');

  shortestSpan.textContent = shortestBreath(breathLog);
}

function updateLongest() {
  const longestSpan = document.querySelector('#longest');

  longestSpan.textContent = longestBreath(breathLog);
}

function updateStats() {
  updateMean();
  updateShortest();
  updateLongest();
}

function updateInterface() {
  updateButtonText();
  updateInstructions();

  if (breathLog.length > 0) {
    updateBreathLog();
    updateStats();
  }
}
