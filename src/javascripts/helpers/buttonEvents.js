import { eating } from '../components/eat';

const buttonEvents = () => {
  document.querySelector('#eatHealthy').addEventListener('click', eating);
  document.querySelector('#eatUnhealthy').addEventListener('click', eating);
};

export default buttonEvents;
