const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const calculateMean = breathLog => {
  const total = breathLog.reduce((sum, seconds) => sum + seconds, 0);
  return Math.round(total / breathLog.length);
};

const shortestBreath = breathLog => Math.min(...breathLog);

const longestBreath = breathLog => Math.max(...breathLog);

const calculateBreathSeconds = startTime => {
  const elapsedTime = (Date.now() - startTime) / 1000;
  return Math.round(elapsedTime);
};