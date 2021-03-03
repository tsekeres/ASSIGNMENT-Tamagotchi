const domBuilder = () => {
  document.querySelector('#eat').innerHTML = `<div id='main-container'>
                                                <div id='eatName' class='d-flex justify-content-center'>Eat</div>
                                                <hr>
                                                <div id='eatScore' class='d-flex justify-content-center'></div>
                                                <hr>
                                                <div class='d-flex justify-content-around align-items-end'>
                                                  <button id='eatHealthy'>Healthy<br>+10</button>
                                                  <button id='eatUnhealthy'>Unhealthy<br>-3</button>
                                                  <div></div>
                                                </div>
                                              </div>`;
  document.querySelector('#play').innerHTML = `<div id='main-container'>
                                                <div id='playName' class='d-flex justify-content-center'>Play</div>
                                                <hr>
                                                <div id='playScore' class='d-flex justify-content-center'>50</div>
                                                <hr>
                                                <div class='d-flex justify-content-around align-items-end'>
                                                  <div></div>
                                                  <button id='playSuperFun'>Super Fun<br>+50</button>
                                                  <button id='playSlightlyFun'>Slightly Fun<br>+20</button>
                                                </div>
                                              </div>`;
  document.querySelector('#fight').innerHTML = `<div id='main-container'>
                                                <div id='fightName' class='d-flex justify-content-center'>Fight</div>
                                                <hr>
                                                <div id='fightScore' class='d-flex justify-content-center'>100</div>
                                                <hr>
                                                <div class='d-flex justify-content-around align-items-end'>
                                                  <button id='fightRun'>Run Away<br>+1</button>
                                                  <button id='fightViolence'>Violence<br>-10</button>
                                                </div>
                                              </div>`;
  document.querySelector('#sleep').innerHTML = `<div id='main-container'>
                                                <div id='sleepName' class='d-flex justify-content-center'>Sleep</div>
                                                <hr>
                                                <div id='sleepScore' class='d-flex justify-content-center'>50</div>
                                                <hr>
                                                <div class='d-flex justify-content-around align-items-end'>
                                                  <button id='sleepNap'>Nap Time<br>+50</button>
                                                  <button id='sleepDeep'>Deep Sleep<br>+60</button>
                                                </div>
                                              </div>`;
};

export default domBuilder;
