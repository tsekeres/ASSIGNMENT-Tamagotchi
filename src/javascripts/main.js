import domBuilder from './components/domBuilder';
import '../styles/main.scss';
import '../styles/eat.scss';
import buttonEvents from './helpers/buttonEvents';
import mascotBuilder from './components/mascotBuilder';

const init = () => {
  domBuilder();
  mascotBuilder();
  buttonEvents();
};

init();
