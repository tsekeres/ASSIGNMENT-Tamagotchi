import domBuilder from './components/domBuilder';
import '../styles/main.scss';
import '../styles/eat.scss';
import '../styles/play.scss';
import '../styles/fight.scss';
import '../styles/sleep.scss';
import buttonEvents from './helpers/buttonEvents';
import mascotBuilder from './components/mascotBuilder';
import { initialEatScore } from './components/eat';
import { initialFightScore } from './components/fight';
import { initialPlayScore } from './components/play';
import { initialSleepScore } from './components/sleep';

const init = () => {
  domBuilder();
  mascotBuilder();
  initialEatScore();
  initialFightScore();
  initialPlayScore();
  initialSleepScore();
  buttonEvents();
};

init();
