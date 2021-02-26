import domBuilder from './components/domBuilder';
import '../styles/main.scss';
import '../styles/eat.scss';
import domEvents from './helpers/domEvents';
import buttonEvents from './helpers/buttonEvents';
import { initialEatScore } from './components/eat';
// import eating from './components/eat';

const init = () => {
  domBuilder();
  initialEatScore();
  domEvents();
  buttonEvents();
};

init();
