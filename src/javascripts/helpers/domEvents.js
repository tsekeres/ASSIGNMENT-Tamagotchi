const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENTs FOR EAT Quadrant
    if (e.target.id.includes('eat')) {
      console.warn('EAT Quad', e.target.id);
    }

    // CLICK EVENTS FOR PLAY Quadrant
    if (e.target.id.includes('play')) {
      console.warn('PLAY Quad', e.target.id);
    }

    // CLICK EVENTS FOR FIGHT Quadrant
    if (e.target.id.includes('fight')) {
      console.warn('FIGHT Quad', e.target.id);
    }

    // CLICK EVENTS FOR SLEEP Quadrant
    if (e.target.id.includes('sleep')) {
      console.warn('SLEEP Quad', e.target.id);
    }
  });
};

export default domEvents;
