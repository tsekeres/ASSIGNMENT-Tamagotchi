import printToDom from './printToDom';

const full = 100;

const initialEatScore = () => {
  const domString = full;

  printToDom('#eatScore', domString);
};

const eating = (e) => {
  if (e.target.id.includes('eatHealthy')) {
    // const newFull = (full += 10);
    // domString += newFull;
    console.warn('+10');
  }
  if (e.target.id.includes('eatUnhealthy')) {
    console.warn('-3', e.target.id);
  }
};

export { eating, initialEatScore };
