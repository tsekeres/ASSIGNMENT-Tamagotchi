const mascotBuilder = () => {
  document.querySelector(
    '#progress'
  ).innerHTML = `<div id='mascot-container' class='mascot'>
                                                <img src='https://lh3.googleusercontent.com/proxy/QtZabBWBXxEvRsTBEy9h_G8koGcvz5aMEYiC5XbjvioNcSiwG7TSnyhOP0p5KOg4UtwfXKheSDfp0S-K3qsnhfqwM0AUxUyv' class='mascotImg' alt='Your cute Tamagotchi'>
                                              </div>`;
};

export default mascotBuilder;
