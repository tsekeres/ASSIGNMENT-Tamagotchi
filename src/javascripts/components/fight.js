import printToDom from './printToDom';

let strength = 100;

const initialFightScore = () => {
  const domString = strength;
  printToDom('#fightScore', domString);
};

const updateFightScore = (newScore) => {
  strength = newScore;
};

const fighting = (e) => {
  if (e.target.id.includes('fightRun')) {
    let domString = strength;
    const score = domString + 1;
    if (score > 100) {
      domString = 100;
      updateFightScore(100);
    } else {
      domString = score;
      updateFightScore(score);
    }
    printToDom('#fightScore', domString);
  }
  if (e.target.id.includes('fightViolence')) {
    let domString = strength;
    const score = domString - 10;
    if (score < 0) {
      domString = 0;
      updateFightScore(0);
    } else {
      domString = score;
      updateFightScore(score);
    }
    printToDom('#fightScore', domString);
  }
};

export { fighting, initialFightScore };
