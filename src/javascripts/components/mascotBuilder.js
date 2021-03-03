const mascotBuilder = () => {
  document.querySelector(
    '#progress'
  ).innerHTML = `<div id='mascot-container' class='mascot'>
                                                <img src='https://i.pinimg.com/474x/8f/11/19/8f1119e54d07b21e0d89859994dcdcb2.jpg' class='mascotImg' alt='Your cute Tamagotchi'>
                                              </div>`;
};

export default mascotBuilder;
