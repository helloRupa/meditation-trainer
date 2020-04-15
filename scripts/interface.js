const breathLog = [];
let clickCount = 0;
let startTime = null;

const clickCountToIndex = () => clickCount % 3;

const updateButtonText = () => {
  const button = document.querySelector('.instructions button');
  button.textContent = content[clickCountToIndex()].button;
};

const randomInstruction = () => {
  const options = content[clickCountToIndex()].instructions;
  return options[getRandomInt(options.length)];
};

const updateInstructions = () => {
  const instructions = document.querySelector('.instructions p');
  instructions.textContent = randomInstruction();
};

const setStartTime = () => {
  if (clickCountToIndex() === 1) {
    startTime = Date.now();
  }
};

const updateBreathLog = () => {
  const breathTable = document.querySelector('.breath-log ul');
  breathTable.textContent = '';
    
  breathLog.forEach(breath => {
    const li = document.createElement('li');
    li.textContent = `${breath} seconds`;
    breathTable.appendChild(li);
  });
};

const logBreath = () => {
  if (clickCountToIndex() === 0) {
    breathLog.push(calculateBreathSeconds(startTime));
  }
};

const updateMean = () => {
  const meanSpan = document.querySelector('#mean');
  
  meanSpan.textContent = calculateMean(breathLog);
};

const updateShortest = () => {
  const shortestSpan = document.querySelector('#shortest');
  
  shortestSpan.textContent = shortestBreath(breathLog);
};

const updateLongest = () => {
    const longestSpan = document.querySelector('#longest');
    
    longestSpan.textContent = longestBreath(breathLog);
};

const updateStats = () => {
  updateMean();
  updateShortest();
  updateLongest();
};

const updateInterface = () => {
  updateButtonText();
  updateInstructions();
  
  if (breathLog.length > 0) {
    updateBreathLog();
    updateStats();
  }
};