import printToDom from './printToDom';

let fun = 50;

const initialPlayScore = () => {
  const domString = fun;
  printToDom('#playScore', domString);
};

const updatePlayScore = (newScore) => {
  fun = newScore;
};

const playing = (e) => {
  if (e.target.id.includes('playSuperFun')) {
    let domString = fun;
    const score = domString + 50;
    if (score > 100) {
      domString = 100;
      updatePlayScore(100);
    } else {
      domString = score;
      updatePlayScore(score);
    }
    printToDom('#playScore', domString);
  }
  if (e.target.id.includes('playSlightlyFun')) {
    let domString = fun;
    const score = domString + 2;
    if (score > 100) {
      domString = 100;
      updatePlayScore(100);
    } else {
      domString = score;
      updatePlayScore(score);
    }
    printToDom('#playScore', domString);
  }
};

export { playing, initialPlayScore };
