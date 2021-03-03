import printToDom from './printToDom';

let rested = 50;

const initialSleepScore = () => {
  const domString = rested;
  printToDom('#sleepScore', domString);
};

const updateSleepScore = (newScore) => {
  rested = newScore;
};

const sleeping = (e) => {
  if (e.target.id.includes('sleepNap')) {
    let domString = rested;
    const score = domString + 50;
    if (score > 100) {
      domString = 100;
      updateSleepScore(100);
    } else {
      domString = score;
      updateSleepScore(score);
    }
    printToDom('#sleepScore', domString);
  }
  if (e.target.id.includes('sleepDeep')) {
    let domString = rested;
    const score = domString + 60;
    if (score > 100) {
      domString = 100;
      updateSleepScore(100);
    } else {
      domString = score;
      updateSleepScore(score);
    }
    printToDom('#sleepScore', domString);
  }
};

export { sleeping, initialSleepScore };
