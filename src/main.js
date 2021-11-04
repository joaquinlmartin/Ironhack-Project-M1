// splashScreen

document.addEventListener('load', () => { 
let game;


function createSplashScreen() {
  const main = document.getElementById('menu');
  const enter = document.getElementById('enter');

  const enterButton = document.querySelector('#enter');
  enterButton.addEventListener('click', () => {
    menu.classList.add('hide');
    const game = document.getElementById('game');
    game.classList.remove('hide');
    game.classList.add('show');

    const startButton = game.querySelector('#start');
    startButton.addEventListener('click', () => {
      let canvas = game.querySelector('#nemesis');
      const ctx = canvas.getContext('2d');
      

      
      
    })

  });
}

createSplashScreen();
});

