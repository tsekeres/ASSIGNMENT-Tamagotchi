import domBuilder from './components/domBuilder';
import '../styles/main.scss';
import '../styles/eat.scss';
import domEvents from './helpers/domEvents';
import buttonEvents from './helpers/buttonEvents';
import { initialEatScore } from './components/eat';
import mascotBuilder from './components/mascotBuilder';
// import eating from './components/eat';

const init = () => {
  domBuilder();
  mascotBuilder();
  initialEatScore();
  domEvents();
  buttonEvents();
};

init();
