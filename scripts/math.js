function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function calculateBreath(startTime) {
  const timeDifference = (Date.now() - startTime) / 1000;

  return Math.round(timeDifference);
}

function meanBreath(breaths) {
  const sum = breaths.reduce((total, breath) => total + breath);

  return Math.round(sum / breaths.length);
}

function shortestBreath(breaths) {
  return Math.min(...breaths);
}

function longestBreath(breaths) {
  return Math.max(...breaths);
}
