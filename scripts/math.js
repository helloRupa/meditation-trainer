function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
} 

function calculateBreathSeconds(startTime) {
  const elapsedTime = (Date.now() - startTime) / 1000;
  return Math.round(elapsedTime);
}

function calculateMean(breathLog) {
  const total = breathLog.reduce((sum, seconds) => sum + seconds, 0);
  return Math.round(total / breathLog.length);
}

function shortestBreath(breathLog) {
  return Math.min(...breathLog);
} 

function longestBreath(breathLog) {
  return Math.max(...breathLog);
} 
