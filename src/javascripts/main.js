import domBuilder from './components/domBuilder';
import '../styles/main.scss';
import domEvents from './helpers/domEvents';

const init = () => {
  domBuilder();
  domEvents();
};

init();
