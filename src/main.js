// splashScreen
console.log("fuera");
document.addEventListener('DOMContentLoaded', () => { 
  console.log("load");
let game;
//let splashScreen;

function printGameOver() {
  let gameOver = document.getElementById('gameover');
  let canvas = document.querySelector('#nemesis');
  canvas.style = 'display: none';
  gameOver.style = 'display: block';
}


function createSplashScreen() {

 //const start = document.getElementById('start');

  const startButton = document.querySelector('#start');
  startButton.addEventListener('click', () => {
    console.log("hola");
    menu.classList.add('hide');
    const game = document.getElementById('game');
    game.classList.remove('hide');
    game.classList.add('show');
    let canvas = game.querySelector('#nemesis');
    const ctx = canvas.getContext('2d');
    const nemesisGame = new Game(
      {
        ctx: ctx,
        rows: canvas.width / 10,
        columns: canvas.height / 10,
        maxCells: 10,
        nemesis: new Player(canvas.width / 10, canvas.height / 10),
      },
      printGameOver
    );

    nemesisGame.start();

  });
}

createSplashScreen();
});

