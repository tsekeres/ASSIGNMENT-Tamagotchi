import { eating } from '../components/eat';
import { fighting } from '../components/fight';
import { playing } from '../components/play';
import { sleeping } from '../components/sleep';

const buttonEvents = () => {
  document.querySelector('#eatHealthy').addEventListener('click', eating);
  document.querySelector('#eatUnhealthy').addEventListener('click', eating);
  document.querySelector('#playSuperFun').addEventListener('click', playing);
  document.querySelector('#playSlightlyFun').addEventListener('click', playing);
  document.querySelector('#fightRun').addEventListener('click', fighting);
  document.querySelector('#fightViolence').addEventListener('click', fighting);
  document.querySelector('#sleepNap').addEventListener('click', sleeping);
  document.querySelector('#sleepDeep').addEventListener('click', sleeping);
};

export default buttonEvents;
